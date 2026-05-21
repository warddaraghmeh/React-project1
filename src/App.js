import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About";
import Css from "./pages/css";
import Profile from "./pages/Profile";
import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SingUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1 style={{ color: "red" }}>Page Not Found</h1>,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <h1 style={{ color: "red" }}>Page Not Found</h1>,
  },
  {
    path: "/signin",
    element: <SignIn />,
    errorElement: <h1 style={{ color: "red" }}>Page Not Found</h1>,
  },
  {
    path: "/signup",
    element: <SignUp />,
    errorElement: <h1 style={{ color: "red" }}>Page Not Found</h1>,
  },
  {
    path: "/css",
    element: <Css />,
    errorElement: <h1 style={{ color: "red" }}>Page Not Found</h1>,
  },
  {
    path: "/profile",
    element: <Profile />,
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
