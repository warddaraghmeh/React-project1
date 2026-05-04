import Header from "../comp/header";
import Footer from "../comp/footer";
import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";
const JavaScript = () => {
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
