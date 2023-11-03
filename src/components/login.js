import React, { useRef, useState, useEffect } from "react";
import { useAuth } from "../AuthProvider";
import { useNavigate } from "react-router-dom";
import { getAuth, RecaptchaVerifier } from "firebase/auth"; // Add this line

function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [error, setError] = useState(""); // State to hold any error messages
  const recaptchaVerifier = useRef(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Ensure the reCAPTCHA verifier is only set if it hasn't been already
    if (!recaptchaVerifier.current) {
      recaptchaVerifier.current = new RecaptchaVerifier(
        'recaptcha-container',
        {'size': 'invisible',},
        getAuth()
      );
      recaptchaVerifier.current.render().catch((e) => {
        setError("ReCAPTCHA failed: " + e.message);
      });
    }
  
    // Cleanup function to clear the reCAPTCHA instance
    return () => {
      if (recaptchaVerifier.current) {
        recaptchaVerifier.current.clear(); // This is important to prevent memory leaks
        recaptchaVerifier.current = null;
      }
    };
  }, []);
  

  const handleSignIn = async () => {
    setError(""); // Clear any previous errors
    try {
      const confirmation = await login(phoneNumber, recaptchaVerifier.current);
      setConfirmationResult(confirmation);
    } catch (error) {
      setError("Sign in failed: " + error.message); // Set any sign-in errors
    }
  };

  const confirmCode = async () => {
    setError(""); // Clear any previous errors
    try {
      const response = await confirmationResult.confirm(verificationCode);
      // Confirming the code should update the user state, wait for it
      if (response.user) {
        navigate("/");
      } else {
        // If the user is not updated, throw an error or handle it appropriately
        setError("User not signed in after confirmation.");
      }
    } catch (error) {
      setError("Error confirming code: " + error.message); // Set any confirmation errors
    }
  };
  

  return (
    <div>
      {error && <p className="error">{error}</p>} {/* Display any error messages */}
      <input
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Phone Number"
      />
      <button onClick={handleSignIn}>Sign In</button>
      <div id="recaptcha-container"></div> {/* This element must be rendered in the component */}
      {confirmationResult && (
        <div>
          <input
            type="text"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            placeholder="Verification Code"
          />
          <button onClick={confirmCode}>Confirm Code</button>
        </div>
      )}
    </div>
  );
}

export default Login;
