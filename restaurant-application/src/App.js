import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./pages/Root";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: "menu",
                    element: <Menu />,
                },
                {
                  path: "about",
                  element: <About/>,
              },
              {
                path: "contact",
                element: <Contact />,
            },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
}

export default App;
