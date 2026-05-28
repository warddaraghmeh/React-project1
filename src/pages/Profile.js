import Header from "../comp/header";
import Footer from "../comp/footer";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import Moment from "moment";
const Profile = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    if (!user && !loading) {
      navigate("/");
    }
    if (user && !user.emailVerified) {
      navigate("/");
    }
  }, [user, loading, navigate]);
  if (loading) {
    return (
      <div>
        <Header />
        <main style={{ textAlign: "center", marginTop: "50px" }}>
          Loading...
        </main>
        <Footer />
      </div>
    );
  }
  if (error) {
    return (
      <h1 style={{ textAlign: "center", marginTop: "50px", color: "red" }}>
        Error: {error.message}
      </h1>
    );
  }
  if (user) {
    return (
      <>
        <Helmet>
          <title>Profile Page</title>
          <style type="text/css">
            {`
        }`}
          </style>
          <meta
            name="description"
            content="View and edit your profile information."
          />
          <link rel="canonical" href="/profile" />
        </Helmet>
        <Header />
        <main>
          <h1
            style={{
              textAlign: "center",
              marginTop: "50px",
              margin: "auto",
              width: "fit-content",
              alignItems: "flex-start",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h6>userName:{user.displayName}</h6>
            <h6>Email:{user.email}</h6>
            <h6>
              Last Login:{" "}
              {Moment(user.metadata.lastSignInTime).format(
                "MM/DD/YYYY hh:mm A",
              )}
            </h6>
            <h6>
              Account Created:{" "}
              {Moment(user.metadata.creationTime).format("MM/DD/YYYY hh:mm A")}
            </h6>
            <button className="delete">Delete Account</button>
          </h1>
        </main>
        <Footer />
      </>
    );
  }
};

export default Profile;
