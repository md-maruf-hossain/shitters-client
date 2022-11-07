import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import Gallery from "../../components/Gallery/Gallery";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import OurTeam from "../../components/OurTeam/OurTeam";
import Register from "../../components/Register/Register";
import Services from "../../components/Services/Services";
import Main from "../../layout/Main";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/ourteam",
        element: <OurTeam />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
