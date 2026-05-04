import { Helmet } from "react-helmet-async";
import Footer from "../comp/footer";
import Header from "../comp/header";
import MainContent from "../comp/MainContent";

const Home = () => {
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
      <MainContent pageName="Home Page" />
      <Footer />
    </>
  );
};

export default Home;
