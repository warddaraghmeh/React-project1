import { Helmet } from "react-helmet-async";
import Footer from "../comp/footer";
import Header from "../comp/header";
import MainContent from "../comp/MainContent";

const Css = () => {
  return (
    <>
      <Helmet>
        <title>CSS Page</title>
        <meta
          name="description"
          content="Learn CSS from scratch with our comprehensive course. Master the art of styling web pages and creating stunning designs."
        />
        <link rel="canonical" href="/css" />
      </Helmet>
      <Header />
      <MainContent pageName="Css Page" />
      <Footer />
    </>
  );
};

export default Css;
