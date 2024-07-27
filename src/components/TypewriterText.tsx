import { useState, useEffect } from "react";

const TypewriterText: React.FC<{ words: string[] }> = ({ words }) => {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const [subIndex, setSubIndex] = useState<number>(0);
  const [deleting, setDeleting] = useState<boolean>(false);
  const [pause, setPause] = useState<boolean>(false);

  useEffect(() => {
    if (pause) {
      const pauseTimeout = setTimeout(() => setPause(false), 2000);
      return () => clearTimeout(pauseTimeout);
    }

    if (subIndex === words[index].length + 1 && !deleting) {
      setPause(true);
      setDeleting(true);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prevSubIndex) => prevSubIndex + (deleting ? -1 : 1));
      },
      deleting ? 100 : 150
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, pause, words]);

  useEffect(() => {
    setDisplayedText(words[index].substring(0, subIndex));
  }, [subIndex, index, words]);

  return (
    <span>
      {displayedText}
      <span className=" blinking-cursor ">|</span>
    </span>
  );
};

export default TypewriterText;
