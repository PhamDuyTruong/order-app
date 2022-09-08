import React, {useEffect, useState, createContext} from "react";
import {useHistory, useLocation} from 'react-router-dom';

import {auth} from '../config/firebaseConfig';
import useFirestoreProducts from '../hooks/useFirestoreProducts';

const AuthContext = createContext();

function AuthProvider({children}){
    const [hasHeader, setHasHeader] = useState(true);
    const [user, setUser] = useState(null);

    const history = useHistory();
    const {pathname} = useLocation();

    const {addToFirestore} = useFirestoreProducts;

    useEffect(() =>{
        const unsubscribed = auth.onAuthStateChanged((user) =>{
            if(user){
                const {displayName, email, uid, photoUrl} = user;
                setUser({displayName, email, uid, photoUrl});
                addToFirestore(uid);
                if(pathname.includes("login")){
                    history.push("/home");
                }
            }
        });

        return () => unsubscribed;
    }, []);

    return (
        <AuthContext.Provider
           value={{
              user,
              setUser,
              hasHeader, 
              setHasHeader
           }}
        >
             {children}
        </AuthContext.Provider>
    )
};

export {AuthContext};
export default AuthProvider;
