import { createRoot } from "react-dom/client";
import { createGlobalStyle } from "styled-components";
// import { theme } from "./theme";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageProvider";
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./view/Home/Home";

const GlobalStyles = createGlobalStyle`
body {
  margin: 0 auto;
  background-color: #979797;
}`;

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        {/* <AlertComponent /> */}
        <NavBar />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {
        index: true,
        element: (
          <>
            <Home />
          </>
        ),
      },
      // {
      //   path: "/info",
      //   element: <Info />,
      // },
      // {
      //   path: "/pricelist",
      //   element: <PriceList />,
      // },
      // {
      //   path: "/reviews",
      //   element: <Reviews />,
      // },
      // {
      //   path: "/contact",
      //   element: <Contact />,
      // },
      // {
      //   path: "/map",
      //   element: <Map />,
      // },
      // {
      //   path: "/alert",
      //   element: <Alert />,
      // },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <LanguageProvider>
      <GlobalStyles />
      <RouterProvider router={router} />
    </LanguageProvider>
  </>
);
