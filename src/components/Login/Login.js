import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";
function Login() {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return;
        }
        if (user) navigate("/home");
        // eslint-disable-next-line
    }, [user, loading]);
    return (
        <div className="login">
            <div className="login__container">

                <button className="login__btn login__google" onClick={signInWithGoogle}>
                    Login with Google
                </button>
            </div>
        </div>
    );
}
export default Login;