import Skills from "../components/Skills";
import { useEffect } from "react";

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="p-32 min-h-screen">
      <Skills />
      <h1 className="text-4xl font-bold text-center">About Me</h1>
      <p className="text-center mt-4">
        I am a full-stack developer with a passion for creating beautiful and
        functional websites and applications.
      </p>

      {/* <h2 className="text-3xl font-bold text-center">My Tech-stack</h2> */}
    </div>
  );
};

export default About;
// animate skills to fly in from the sides
