import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import Error from "../../components/Error/Error";
import Gallery from "../../components/Gallery/Gallery";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import MyReviews from "../../components/MyReviews/MyReviews";
import MyReviewUpdate from "../../components/MyReviews/MyReviewUpdate";
import MyServices from "../../components/MyServices/MyServices";
import Register from "../../components/Register/Register";
import ServiceDetails from "../../components/ServiceDetails/ServiceDetails";
import Services from "../../components/Services/Services";
import Main from "../../layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://shutters-server.vercel.app/services"),
      },
      {
        path: "/services",
        element: <Services />,
        loader: () => fetch("https://shutters-server.vercel.app/services"),
      },
      {
        path: "/service/:id",
        element: <ServiceDetails />,
        loader: ({ params }) => fetch(`https://shutters-server.vercel.app/service/${params.id}`),
      },
      {
        path: "/myServices",
        element: (
          <PrivateRoute>
            <MyServices />
          </PrivateRoute>
        ),
      },
      {
        path: "/myReview",
        element: (
          <PrivateRoute>
            <MyReviews />
          </PrivateRoute>
        ),
      },
      {
        path: "/myreviewedit/:id",
        element: (
          <PrivateRoute>
            <MyReviewUpdate />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://shutters-server.vercel.app/updatereview/${params.id}`),
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
        path: "/*",
        element: <Error />,
      },
    ],
  },
]);
