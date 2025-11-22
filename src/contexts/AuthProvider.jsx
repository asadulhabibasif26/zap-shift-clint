import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContexts';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);

    const registerUser = (email , password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email , password)
    }

    const singInGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const singInUser = (email , password)=> {
        setLoading(true)
        return signInWithEmailAndPassword(auth , email, password)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser , profile)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth , (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    },[])

    const AuthInfo = {
        registerUser,
        singInUser,
        singInGoogle,
        logOut,
        updateUserProfile,
        user,
        loading
    }

    return (
        <AuthContext value={AuthInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;