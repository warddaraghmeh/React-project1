import Header from "../comp/header";
import Footer from "../comp/footer";
import { Helmet } from "react-helmet-async";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
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

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      await updateProfile(userCredential.user, {
        displayName: username,
      });

      setUsername("");
      setEmail("");
      setPassword("");

      navigate("/");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setErrorMsg("This email is already in use");
      } else if (error.code === "auth/invalid-email") {
        setErrorMsg("Invalid email address");
      } else if (error.code === "auth/weak-password") {
        setErrorMsg("Password should be at least 6 characters");
      } else {
        setErrorMsg("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>SignUp</title>
        <link rel="canonical" href="/signup" />
      </Helmet>

      <Header />

      <main>
        <form onSubmit={handleSubmit}>
          <p style={{ fontSize: "23px" }}>
            Create a new account <span>🧡</span>
          </p>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

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

          {errorMsg && (
            <p
              style={{
                color: "#ff4d4f",
                marginTop: "10px",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              {errorMsg}
            </p>
          )}

          <button type="submit" disabled={loading}>
            {loading ? "Loading..." : "Sign Up"}
          </button>

          <p className="account">
            Already have an account? <a href="/signin">SignIn</a>
          </p>
        </form>
      </main>

      <Footer />
    </>
  );
};

export default SignUp;
