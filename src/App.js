import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Html from "./pages/html";
import Css from "./pages/css";
import JavaScript from "./pages/javascript";
import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1 style={{ color: "red" }}>Page Not Found</h1>,
  },
  {
    path: "/html",
    element: <Html />,
    errorElement: <h1 style={{ color: "red" }}>Page Not Found</h1>,
  },
  {
    path: "/css",
    element: <Css />,
    errorElement: <h1 style={{ color: "red" }}>Page Not Found</h1>,
  },
  {
    path: "/javascript",
    element: <JavaScript />,
    errorElement: <h1 style={{ color: "red" }}>Page Not Found</h1>,
  },
]);
function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme}`}>
      <RouterProvider router={router} />;
    </div>
  );
}

export default App;
