import { Helmet } from "react-helmet-async";
import Footer from "../comp/footer";
import Header from "../comp/header";
import MainContent from "../comp/MainContent";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
const About = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    if (!user && !loading) {
      navigate("/");
    }
    if (user && !user.emailVerified) {
      navigate("/");
    }
  }, [user, loading, navigate]);
  if (loading) {
    return (
      <>
        <Header />
        <main>Loading...</main>
        <Footer />
      </>
    );
  }

  if (user) {
    if (user.emailVerified) {
      return (
        <>
          <Helmet>
            <title>About Page</title>
            <meta
              name="description"
              content="Learn about our company and mission. Get to know the team behind the scenes and how we can help you achieve your web development goals."
            />
            <link rel="canonical" href="/about" />
          </Helmet>
          <Header />
          <MainContent pageName="About Page" />
          <Footer />
        </>
      );
    }
  }
};

export default About;
