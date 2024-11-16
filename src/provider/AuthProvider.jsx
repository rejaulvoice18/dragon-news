import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    // website relod dile kichukhoner jonno data null hoye jay
    // tai data null thaka obostai website er other components er kaj thik thak rakhar jonno
    // loading state ta true kore debo r true thaka obostai ekta loading spinner run korbo
    // jotokhon nah data load hochhe

    // user state helps to conditional render
    // user state setting up useState whenver createing new user and as well signIn time
    

    // creating new user by calling email and password api
    const createNewUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in by calling sign in api
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    // logout api
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // update user name and photo url
    const updateUserProfile = (updateData) => {
        return updateProfile(auth.currentUser, updateData);
    }

    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        signInUser,
        loading,
        updateUserProfile
    }

    // setting obserber to observe the user 
    // observer use na korle user create korar por o user stat null hoye jai
    // tai observer ta bosanu hoy
    // observer er madhome user k dhore rakha jay
    // seshe clean up o kore fela hoy unsubscribe() function call er madhome
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            // user ta load hoye gele amar loader ta k false kore debo
            setLoading(false);
        });
        return () => {
            unsubscribe()
        }
    },[])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;