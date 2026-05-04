import { Helmet } from "react-helmet-async";
import Footer from "../comp/footer";
import Header from "../comp/header";
import MainContent from "../comp/MainContent";

const Html = () => {
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
