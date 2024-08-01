import "./App.css";
import { HelmetProvider } from "react-helmet-async";

import Root from "./routes/Root.tsx";
import Home from "./routes/Home.tsx";
import About from "./routes/About";
import Projects from "./routes/Projects.tsx";
import ProjectDetails from "./routes/ProjectDetails.tsx";
import ErrorPage from "./error-page.tsx";
import { useContext, useEffect } from "react";
import AppContext from "./store/app-context.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/projects", element: <Projects /> },
      { path: "/projectDetails/:projectId", element: <ProjectDetails /> },
    ],
  },
]);

function App() {
  const { darkMode } = useContext(AppContext);

  useEffect(() => {
    fetch("/.netlify/functions/increase_clicks", {
      method: "POST",
      body: JSON.stringify({ id: "siteClicks" }),
    });
  }, []);

  return (
    <HelmetProvider>
      <div
        className={`${
          darkMode ? "text-white bg-custom-gradient " : ""
        } duration-300 `}
      >
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
  );
}

export default App;
