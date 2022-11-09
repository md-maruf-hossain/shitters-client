import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader, useLoader] = useState(true);

    // register
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // updateuser
    const updateUserProfile = (profile) =>{
        return updateProfile(auth.currentUser, profile);
    }
    // login
    const logIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    // logout
    const logOut = () =>{
        return signOut(auth)
    }
    // google login
    const googleUserLogin = (provider) =>{
        return signInWithPopup(auth, provider)
    }
    
    // monitor user
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
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