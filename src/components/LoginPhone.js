import React, { useState } from "react";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  PhoneAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import { appAuth } from "../firebase/firebaseConfig";

const LoginPhone = ({ onLoginSuccess }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        { size: "invisible" },
        appAuth
      );
      window.recaptchaVerifier.render().catch((error) => {
        console.error("reCAPTCHA render error:", error);
      });
    }
    // return () => {
    //   // Reset reCAPTCHA verifier here
    //   if (window.recaptchaVerifier) {
    //     window.recaptchaVerifier.clear();
    //     window.recaptchaVerifier = null;
    //   }
    // };
  };

  const handleSendCode = () => {
    setupRecaptcha();
    signInWithPhoneNumber(appAuth, phoneNumber, window.recaptchaVerifier)
      .then((result) => {
        setConfirmationResult(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleVerifyCode = () => {
    if (!confirmationResult) {
      console.error("No confirmation result available");
      return;
    }

    const credential = PhoneAuthProvider.credential(
      confirmationResult.verificationId,
      verificationCode
    );
    signInWithCredential(appAuth, credential)
      .then((userCredential) => {
        console.log(userCredential.user);
        if (onLoginSuccess) {
          onLoginSuccess();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <label htmlFor="phone-number">Phone Number:</label>
      <input
        type="text"
        id="phone-number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <div id="recaptcha-container"></div>
      <button onClick={handleSendCode}>Send Verification Code</button>
      <br />
      <label htmlFor="verification-code">Verification Code:</label>
      <input
        type="text"
        id="verification-code"
        value={verificationCode}
        onChange={(e) => setVerificationCode(e.target.value)}
      />
      <button onClick={handleVerifyCode}>Verify Code</button>
    </div>
  );
};

export default LoginPhone;
