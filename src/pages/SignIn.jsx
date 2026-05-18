import Header from "../comp/header";
import Footer from "../comp/footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
const SignIn = () => {
  return (
    <>
      <Helmet>
        <title>SignIn </title>

        <link rel="canonical" href="/signin" />
      </Helmet>
      <Header />
      <main>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign In</button>
          <p className="account">
            Dont have an account? <Link to="/signup">SignUp</Link>
          </p>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default SignIn;
