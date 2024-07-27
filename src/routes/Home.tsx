import { useEffect, useState } from "react";

import photoMarco from "../assets/images/photo-marco.png";
import RouteButton from "../components/RouteButton";
import TypewriterText from "../components/TypewriterText";

import { ChevronDown } from "lucide-react";

export default function Home() {
  const [showChevronDown, setShowChevronDown] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercentage =
        (scrollTop / (documentHeight - windowHeight)) * 100;

      if (scrollPercentage <= 15) {
        setShowChevronDown(true);
      } else {
        setShowChevronDown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="md:px-32">
      <section className="start-section h-screen px-4  flex flex-col justify-between">
        <div className="flex flex-col md:flex-row my-auto justify-around  ">
          <div className=" md:w-1/2 text-7xl flex flex-col gap-4 mt-24">
            <h1 id="text-marco">
              I'm Marco,
              <br />
              <TypewriterText
                words={["a Web Developer.", "a Team Player.", "an Optimist."]}
              />
            </h1>
            <h1 id="text-vision" className="text-accent-color-dark">
              Turning Vision into Reality with Code.
            </h1>
          </div>
          <div className="md:w-1/2">
            <img src={photoMarco} alt="Marco Rosenbaum" />
          </div>
        </div>

        <ChevronDown
          size={48}
          className={`mx-auto animate-bounce duration-300 ${
            showChevronDown ? "opacity-100" : "opacity-0"
          }`}
        />
      </section>
      <section className=" h-screen ">
        <div className="flex  justify-around gap-8 items-center h-full">
          {/* image from 
Lauren Mancke on unsplash */}
          <RouteButton
            route="/projects"
            heading="Projects"
            text={["Check out my projects."]}
            image="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          {/* image from 
Ben Sweet on unsplash */}
          <RouteButton
            route="/about"
            heading="About me"
            text={["Who am I?", "What are my skills?"]}
            image="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          {/* image from 
Scott Graham on unsplash */}
          <RouteButton
            route="/about"
            heading="Services"
            text={["Which services do I offer?"]}
            image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </section>

      {/* circle blurr */}
      <div className="absolute top-0 left-0 -z-10 inset-0 flex justify-start items-start">
        <div className="circle-blur w-[80vh] h-[80vh] -translate-y-1/2 -translate-x-1/2"></div>
      </div>
      <div className="absolute top-0 right-0 -z-10 inset-0 flex justify-end items-start overflow-clip">
        <div className="circle-blur w-[200vh] h-[150vh] -translate-y-1/2 translate-x-1/2"></div>
      </div>
    </div>
  );
}
