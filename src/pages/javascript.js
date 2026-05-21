import Header from "../comp/header";
import Footer from "../comp/footer";
import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
const JavaScript = () => {
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
        <title>JavaScript Page</title>
        <meta
          name="description"
          content="Learn JavaScript from scratch with our comprehensive course. Master the fundamentals of programming and create dynamic web applications."
        />
        <link rel="canonical" href="/javascript" />
      </Helmet>
      <Header />
      <MainContent pageName="JavaScript Page" />
      <Footer />
    </>
  );
};

export default JavaScript;
