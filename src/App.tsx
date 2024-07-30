import "./App.css";

import Root from "./routes/Root.tsx";
import Home from "./routes/Home.tsx";
import About from "./routes/About";
import Projects from "./routes/Projects.tsx";
import ProjectDetails from "./routes/ProjectDetails.tsx";
import ErrorPage from "./error-page.tsx";
import { useContext } from "react";
import AppContext from "./store/app-context.tsx";
// import LoadingBar from "./components/LoadingBar.tsx";

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
  return (
    <div
      className={`${
        darkMode ? "text-white bg-custom-gradient " : ""
      } duration-300 `}
    >
      {/* <div className="flex gap-2">
        <div className="start-screen fixed bottom-0 w-1/2 top-0 left-0 bg-black z-[1100]"></div>
        <div className="start-screen fixed bottom-0 w-1/2 right-0 top-0  bg-black z-[1100]"></div>
      </div>
      <LoadingBar /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
