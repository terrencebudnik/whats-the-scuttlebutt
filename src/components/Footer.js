import React from "react";
import { useAuth } from "../AuthProvider";
import Button from "react-bootstrap/Button";
import "./Footer.css";

function Footer() {
  const { currentUser, logout } = useAuth();
  return (
    <div className="footer">
      <p>© 2023 by Scuttlebutt. All rights reserved.</p>
      {currentUser ? (
        <>
          <Button variant="outline-primary" onClick={logout}>
            Logout
          </Button>
        </>
      ) : (
        <Button variant="outline-primary">Login</Button>
      )}
    </div>
  );
}

export default Footer;
