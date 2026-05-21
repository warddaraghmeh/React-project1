import Header from "../comp/header";
import Footer from "../comp/footer";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    try {
      setLoading(true);

      await signInWithEmailAndPassword(auth, email, password);

      setEmail("");
      setPassword("");

      navigate("/");
    } catch (error) {
      let message = "";

      switch (error.code) {
        case "auth/user-not-found":
          message = "User not found";
          break;

        case "auth/wrong-password":
          message = "Wrong password";
          break;

        case "auth/invalid-email":
          message = "Invalid email format";
          break;

        case "auth/invalid-credential":
          message = "Invalid email or password";
          break;

        case "auth/too-many-requests":
          message = "Too many attempts. Try again later";
          break;

        default:
          message = "Something went wrong";
      }

      setErrorMsg(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>SignIn</title>
      </Helmet>

      <Header />

      <main>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Loading..." : "Sign In"}
          </button>

          {errorMsg && (
            <p style={{ color: "red", marginTop: "1px" , fontSize: "14px" }}>{errorMsg}</p>
          )}

          <p className="account">
            Dont have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      </main>

      <Footer />
    </>
  );
};

export default SignIn;
