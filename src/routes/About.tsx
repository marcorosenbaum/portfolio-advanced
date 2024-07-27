import Skills from "../components/Skills";
import { useEffect, useState } from "react";
import photoMarco from "../assets/images/photo-marco.png";

const TAGS = [
  "Changed from electrical engineering to software engineering in 2022",
  "Prioritizes team success over personal archievements",
  "Believes in continuous learning",
  "Experienced team leader",
  "Fullstack Developer",
  "Highly ambitious",
];

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="p-32 min-h-screen flex flex-col gap-10">
      <div className="flex">
        <div className="w-3/4">
          <h1 className="text-4xl font-bold text-center">About Me</h1>
          {/* <p className="text-center mt-4">
            I am a full-stack developer with a passion for creating beautiful
            and functional websites and applications.
          </p> */}
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
        <div className="w-1/4 h-80">
          <img src={photoMarco} alt="Photo Marco" />
        </div>
      </div>

      <Skills />
      {/* <h2 className="text-3xl font-bold text-center">My Tech-stack</h2> */}
    </div>
  );
};

export default About;
// animate skills to fly in from the sides
