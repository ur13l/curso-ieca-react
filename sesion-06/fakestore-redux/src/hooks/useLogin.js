
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../main";
import { useEffect, useState } from "react";

export const useLogin = () => {
    const [user, setUser] = useState(null);
    const [loadingSession, setLoadingSession] = useState(true);
    const [loadingSignIn, setLoadingSignIn] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoadingSession(false);
        });

        return () => unsubscribe();
    }, [])


    const login = async (email, password) => {
        try {
            const res = await signInWithEmailAndPassword(auth, email, password)
            return {
                email: res.user.email
            }
        } catch (err) {
            if(err.code === "auth/invalid-login-credentials") {
                throw new Error("Credenciales inválidas");
            }
            else {
                throw new Error("Error desconocido al iniciar sesión");
            }
        }
    }

    const logout = async () => {
        await signOut(auth);
    }

    return {
        login,
        logout,
        user,
        loadingSession,
        loadingSignIn
    }
}