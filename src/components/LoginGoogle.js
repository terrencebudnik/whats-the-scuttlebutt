import React from "react";
import { appAuth } from "../firebase/firebaseConfig";
import { signInWithRedirect, GoogleAuthProvider } from "firebase/auth";


const LoginGoogle = () => {
 

    const handleLogin = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(appAuth, provider);
    };

    return (
        <button onClick={handleLogin}>Login with Google</button>
    );
};

export default LoginGoogle;
