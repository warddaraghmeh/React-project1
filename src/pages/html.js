import { Helmet } from "react-helmet-async";
import Footer from "../comp/footer";
import Header from "../comp/header";
import MainContent from "../comp/MainContent";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
const Html = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    if (!user && !loading) {
      navigate("/signin");
    }
  }, [user, loading, navigate]);
  return (
    <>
      <Helmet>
        <title>HTML Page</title>
        <meta
          name="description"
          content="Learn HTML from scratch with our comprehensive course. Master the fundamentals of web development and create stunning websites."
        />
        <link rel="canonical" href="/html" />
      </Helmet>
      <Header />
      <MainContent pageName="Html Page" />
      <Footer />
    </>
  );
};

export default Html;
