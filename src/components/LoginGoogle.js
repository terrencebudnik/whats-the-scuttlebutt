import React from "react";
import { appAuth } from "../firebase/firebaseConfig";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";


function LoginGoogle({ handleLoginSuccess }) {
const navigate = useNavigate();

    const handleLogin = () => {
    
        signInWithPopup(appAuth, new GoogleAuthProvider())
        .then((result) => {
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;
            const user = result.user;
            console.log(user);
        })
        .catch((error) => {
            // const credential = GoogleAuthProvider.credentialFromError(error);
            console.error(error);
        });

        navigate("/");


    };
    
    return (
        <div>
        <button onClick={handleLogin}>Login with Google</button>
        </div>
    );
    };

export default LoginGoogle;
