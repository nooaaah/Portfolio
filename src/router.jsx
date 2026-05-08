import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },                 
      { path: "projects/:slug", element: <ProjectDetails /> }  
    ]
  }
]);
