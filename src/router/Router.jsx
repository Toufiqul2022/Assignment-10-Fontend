import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import PrivateRoute from "./PrivateRoute";
import ServiceDetails from "../Pages/ServiceDetails";
import ForgetPassword from "../Pages/ForgetPassword";
import Error404 from "../components/Error404";
import AddListing from "../Pages/AddListing";
import MyListing from "../Pages/MyListing";
import UpdateServices from "../Pages/UpdateServices";
import MyOrder from "../Pages/MyOrder";
import CategoryFilteredProducts from "../Pages/CategoryFilteredProducts";
import MyProfile from "../../../Assignment-9/src/Pages/MyProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error404></Error404>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/services",
        Component: Services,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/service/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/forget/:email",
        Component: ForgetPassword,
      },
      {
        path: "/my-profile",
        Component: MyProfile,
      },
      {
        path: "/add-services",
        element: (
          <PrivateRoute>
            <AddListing></AddListing>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-services",
        element: (
          <PrivateRoute>
            <MyListing></MyListing>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-services/:id",
        element: (
          <PrivateRoute>
            <UpdateServices></UpdateServices>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-orders",
        element: (
          <PrivateRoute>
            <MyOrder></MyOrder>
          </PrivateRoute>
        ),
      },
      {
        path: "/category-filtered-product/:categoryName",
        element: <CategoryFilteredProducts></CategoryFilteredProducts>,
      },
    ],
  },
]);
