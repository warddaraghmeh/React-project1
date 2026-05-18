import Header from "../comp/header";
import Footer from "../comp/footer";
import { Helmet } from "react-helmet-async";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      console.log(userCredential.user);

      setUsername("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error.message);
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
            Create a new account<span>🧡</span>
          </p>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />

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
