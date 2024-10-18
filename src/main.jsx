import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";  

import "@/styles/index.scss";
import HomePage from "@/pages/home.jsx";
import AboutPage from "@/pages/about.jsx";
import NotFoundPage from "@/pages/notFound.jsx";
import HousingDetailPage from "@/pages/housingDetail.jsx";
import { routes } from "@/routes.js";
import MainLayout from "@/components/layout/MainLayout.jsx";


const router = createBrowserRouter([
    {
      path: routes.home,
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: routes.about,
          element: <AboutPage />,
        },
        {
          path: `${routes.housingDetail}/:id`,
          element: <HousingDetailPage />,
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
  ]);


createRoot(document.getElementById("root")).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );