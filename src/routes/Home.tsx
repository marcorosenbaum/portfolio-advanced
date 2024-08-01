import { useEffect, useState, useContext } from "react";
import { Helmet } from "react-helmet-async";

import photoMarco from "../assets/images/photo-marco.png";
import RouteButton from "../components/RouteButton/RouteButton";
import TypewriterText from "../components/TypewriterText";
import AppContext from "../store/app-context";

import { ChevronDown } from "lucide-react";

export default function Home() {
  const [showChevronDown, setShowChevronDown] = useState(true);
  const { darkMode } = useContext(AppContext);

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
    <>
      <Helmet>
        <meta
          name="description"
          content="Marco Rosenbaum - Web Developer. Learn more about me and view my projects in my portfolio."
        />
        <meta property="og:title" content="Portfolio Marco Rosenbaum" />
        <meta
          property="og:description"
          content="My name is Marco Rosenbaum. I'm a Web Developer. Have a look at my projects and learn more about me."
        />
        <meta
          property="og:image"
          content="https://marcorosenbaum.netlify.app/assets/photo-marco-2WdzdPYo.png"
        />
      </Helmet>
      <div className="md:px-32 ">
        <section className="start-section min-h-screen px-4 flex flex-col justify-around">
          <div className="flex flex-col  xl:flex-row gap-8 xl:my-auto justify-around  ">
            <div className=" xl:w-1/2 text-7xl flex flex-col gap-12 mt-24">
              <h1 id="text-marco">
                I'm Marco,
                <br />
                <TypewriterText
                  words={["a Web Developer.", "a Team Player.", "an Optimist."]}
                />
              </h1>
              <h1
                id="text-vision"
                className={`${
                  darkMode ? "text-accent-color" : "text-accent-color-dark"
                } `}
              >
                Turning Vision into Reality with Code.
              </h1>
            </div>
            <div className="xl:w-1/2">
              <img src={photoMarco} alt="Marco Rosenbaum" loading="lazy" />
            </div>
          </div>

          <ChevronDown
            size="3rem"
            className={`mx-auto animate-bounce duration-300 ${
              showChevronDown ? "opacity-100" : "opacity-0"
            }`}
          />
        </section>
        <section className="md:h-screen   md:mt-0 py-24">
          <div className="flex flex-col md:flex-row justify-around gap-16 items-center h-full">
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
            {/* <RouteButton
            route="/about"
            heading="Services"
            text={["Which services do I offer?"]}
            image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          /> */}
          </div>
        </section>
      </div>
    </>
  );
}
