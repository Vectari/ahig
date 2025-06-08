import { createRoot } from "react-dom/client";
import { createGlobalStyle } from "styled-components";
// import { theme } from "./theme";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageProvider";
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./view/Home/Home";
import { Services } from "./view/Services/Services";
import { Team } from "./view/Team/Team";
import { Gallery } from "./view/Gallery/Gallery";
import { Contact } from "./view/Contact/Contact";
import { Blog } from "./view/Blog/Blog";
import { Alert } from "./view/Alert/Alert";

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
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/alert",
        element: <Alert />,
      },
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
