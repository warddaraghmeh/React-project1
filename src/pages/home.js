import { Helmet } from "react-helmet-async";
import Footer from "../comp/footer";
import Header from "../comp/header";
import MainContent from "../comp/MainContent";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { Link } from "react-router-dom";
const Home = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="Welcome to our web development course! Learn HTML, CSS, and JavaScript from scratch with our comprehensive tutorials and hands-on projects."
        />
        <link rel="canonical" href="/" />
      </Helmet>

      <Header />
      {user && <MainContent pageName="Home Page" />}
      {!user && (
        <main>
          <p className="pls">
            Please{" "}
            <Link style={{ fontSize: "27px" }} to="/signin">
              Sign-in
            </Link>{" "}
            to view this page ❤️
          </p>
        </main>
      )}
      <Footer />
    </>
  );
};

export default Home;
