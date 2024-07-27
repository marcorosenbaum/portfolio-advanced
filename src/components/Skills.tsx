import { useEffect, useState } from "react";

import CssLogo from "../assets/logos/CssLogo";
import TailwindLogo from "../assets/logos/TailwindLogo";
import JavaScriptLogo from "../assets/logos/JavaScriptLogo";
import TypeScriptLogo from "../assets/logos/TypeScriptLogo";
import VueLogo from "../assets/logos/VueLogo";
import ReactLogo from "../assets/logos/ReactLogo";
import NextLogo from "../assets/logos/NextLogo";
import FirebaseLogo from "../assets/logos/FirebaseLogo";
import NodeLogo from "../assets/logos/NodeLogo";

const skills = [
  { name: "CSS", logo: CssLogo },
  { name: "Tailwind", logo: TailwindLogo },
  { name: "JavaScript", logo: JavaScriptLogo },
  { name: "TypeScript", logo: TypeScriptLogo },
  { name: "Node", logo: NodeLogo },
  { name: "Vue", logo: VueLogo },
  { name: "React", logo: ReactLogo },
  { name: "Next", logo: NextLogo },
  { name: "Firebase", logo: FirebaseLogo },
];

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex gap-8 flex-wrap">
      {skills.map((skill, index) => (
        <div
          key={index}
          className={`skill ${
            isVisible ? "fly-in" : ""
          } flex flex-col flex-1 items-center`}
          style={{ animationDelay: `${0.7 + index * 0.1}s` }}
        >
          <skill.logo />
          <div>{skill.name}</div>
        </div>
      ))}
    </div>
  );
};
export default Skills;
