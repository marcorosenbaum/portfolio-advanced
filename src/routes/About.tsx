import Skills from "../components/Skills";
import { useEffect, useState } from "react";
import photoMarco from "../assets/images/photo-marco.png";

const TAGS = [
  "Changed from electrical engineering to software engineering in 2022",
  "Prioritizes team success over personal archievements",
  "Believes in continuous learning",
  "Experienced team leader",
  "Highly ambitious",
  "Web Developer",
];

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="landscape:p-32 portrait:p-4 portrait:pt-24  min-h-screen flex flex-col gap-24">
      <div className="flex min-h-min portrait:mx-auto">
        <div className="landscape:w-3/4">
          <h1 className="text-4xl font-bold text-center">About Me</h1>
          <ul>
            {TAGS.map((tag, index) => (
              <li
                key={tag}
                className={`skill ${
                  isVisible ? "fly-in" : ""
                }  text-center mt-4`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/4 min-h-min portrait:hidden">
          <img src={photoMarco} alt="Photo Marco" />
        </div>
      </div>

      <Skills />

      <div className="flex justify-center items-center cv portrait:mb-20">
        <a
          href="/CV_Marco_Rosenbaum.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="fly-in skill h-12 w-32 border-2 border-accent-color rounded-xl inline-flex items-center justify-center landscape:hover:bg-accent-color landscape:hover:text-black duration-300"
          style={{ animationDelay: "1.5s" }}
        >
          View CV
        </a>
      </div>
    </div>
  );
};

export default About;
