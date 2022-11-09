import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    // register
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // updateuser
    const updateUserProfile = (profile) =>{
        setLoader(true);
        return updateProfile(auth.currentUser, profile);
    }
    // login
    const logIn = (email, password) =>{
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    // logout
    const logOut = () =>{
        setLoader(true);
        return signOut(auth)
    }
    // google login
    const googleUserLogin = (provider) =>{
        setLoader(true);
        return signInWithPopup(auth, provider)
    }
    
    // monitor user
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            setLoader(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loader,
        createUser,
        updateUserProfile,
        logIn,
        logOut,
        googleUserLogin,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProvider;