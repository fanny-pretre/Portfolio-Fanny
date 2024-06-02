import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

import "./index.css";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Experience from "./pages/Experience";
import CSR from "./pages/CSR";

function Main() {
  const router = createBrowserRouter([
    {
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/project/:id",
          element: <ProjectDetail />,
        },
        {
          path: "/csr",
          element: <CSR />,
        },
        {
          path: "/experience",
          element: <Experience />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
