import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import Button from "react-bootstrap/Button";
import "./Footer.css";

function Footer() {
  const navigate = useNavigate();

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
    navigate("/");
  };
  return (
    <div className="footer">
      <>
        <Button variant="outline-primary" onClick={handleLogout}>
          Logout
        </Button>
      </>

      <p>© 2023 by Scuttlebutt. All rights reserved.</p>
    </div>
  );
}

export default Footer;
