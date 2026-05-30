import { Helmet } from "react-helmet-async";
import Footer from "../comp/footer";
import Header from "../comp/header";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { Link } from "react-router-dom";
import { sendEmailVerification } from "firebase/auth";

const Home = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return (
      <>
        <Header />
        <main>
          Loading...
          <div className="loader"></div>
        </main>
        <Footer />
      </>
    );
  }

  if (!user) {
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
        <main>
          <p className="pls">
            Please{" "}
            <Link style={{ fontSize: "27px" }} to="/signin">
              Sign-in
            </Link>{" "}
            to view this page ❤️
          </p>
        </main>
        <Footer />
      </>
    );
  }

  if (user) {
    if (user.emailVerified) {
      return (
        <>
          <Helmet>
            <title>Home Page</title>
            <meta
              name="description"
              content="Welcome to our web development course! Learn HTML, CSS, and JavaScript from scratch with our comprehensive tutorials and hands-on projects."
            />
          </Helmet>
          <Header />

          <main>
            {" "}
            <p>Welcome, {user.displayName}</p>
          </main>

          <Footer />
        </>
      );
    }
    if (!user.emailVerified) {
      return (
        <>
          <Helmet>
            <title>Home Page</title>
            <meta
              name="description"
              content="Please verify your email address before logging in."
            />
            <link rel="canonical" href="/email-verification" />
          </Helmet>
          <Header />

          <main>
            <p className="verify">
              Please verify your email address before logging in.
            </p>
            <button
              className="delete"
              onClick={() => {
                sendEmailVerification(auth.currentUser).then(() => {
                  alert("Verification email sent!");
                });
              }}
            >
              Resend email
            </button>
          </main>

          <Footer />
        </>
      );
    }
  }
};

export default Home;
