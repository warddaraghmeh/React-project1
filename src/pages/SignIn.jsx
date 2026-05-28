import Header from "../comp/header";
import Footer from "../comp/footer";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase/config";
import { useState } from "react";
import "./signin.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [resetEmail, setResetEmail] = useState("");
  const [resetLoading, setResetLoading] = useState(false);
  const [showSendEmailMsg, setShowSendEmailMsg] = useState(false);

  const [showForm, setShowForm] = useState(false);

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

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setShowSendEmailMsg(false);

    if (!resetEmail) return;

    try {
      setResetLoading(true);

      await sendPasswordResetEmail(auth, resetEmail);

      setShowSendEmailMsg(true);
      setResetEmail("");
    } catch (error) {
      setErrorMsg("Failed to send reset email");
    } finally {
      setResetLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>SignIn</title>
      </Helmet>

      <Header />

      <main>
        {/* RESET PASSWORD MODAL */}
        <form className={`forgot-password ${showForm ? "show-form" : ""}`}>
          <div className="close" onClick={() => setShowForm(false)}>
            <i className="fa-solid fa-xmark"></i>
          </div>

          <input
            type="email"
            placeholder="Email"
            value={resetEmail}
            onChange={(e) => setResetEmail(e.target.value)}
            required
          />

          <button
            type="button"
            onClick={handleResetPassword}
            disabled={resetLoading}
          >
            {resetLoading ? "Sending..." : "Reset Password"}
          </button>

          {showSendEmailMsg && (
            <p className="check-email">
              please check your email to reset your password
            </p>
          )}
        </form>

        {/* LOGIN FORM */}
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
            <p style={{ color: "red", marginTop: "1px", fontSize: "14px" }}>
              {errorMsg}
            </p>
          )}

          <p className="account">
            Dont have an account? <Link to="/signup">Sign Up</Link>
          </p>

          <p className="forgot-password-link" onClick={() => setShowForm(true)}>
            Forgot password?
          </p>
        </form>
      </main>

      <Footer />
    </>
  );
};

export default SignIn;
