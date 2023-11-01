import React, { useRef, useState } from "react";
import { useAuth } from "../AuthProvider";
import { useNavigate } from "react-router-dom";

function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const recaptchaVerifier = useRef(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const confirmation = await login(phoneNumber, recaptchaVerifier.current);
      setConfirmationResult(confirmation);
    } catch (error) {
      console.error("Sign in failed", error);
    }
  };

  const confirmCode = async () => {
    try {
      await confirmationResult.confirm(verificationCode);
      navigate("/home");
    } catch (error) {
      console.error("Error confirming code: ", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Phone Number"
      />
      <button onClick={handleSignIn}>Sign In</button>
      <div ref={recaptchaVerifier}></div>
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
