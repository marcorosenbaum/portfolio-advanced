import Skills from "../components/Skills";
import { useEffect } from "react";

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="p-32 min-h-screen">
      <Skills />
    </div>
  );
};

export default About;
// animate skills to fly in from the sides
