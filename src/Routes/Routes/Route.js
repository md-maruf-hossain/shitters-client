import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import Error from "../../components/Error/Error";
import Gallery from "../../components/Gallery/Gallery";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
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
        loader: () => fetch('http://localhost:5000/services')
      },
      {
        path: "/services",
        element: <Services />,
        loader: () => fetch('http://localhost:5000/services')
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
      {
        path: '/*',
        element: <Error/>
      }
    ],
  },
]);
