import { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../services/config'
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';


export const authContext = createContext();

export const useAuth = () =>{
    const context = useContext(authContext);
    if(!context){
        console.error('error creating auth context');
    }
    return context;
}

export function AuthProvider({ children }){

    const [user, setUser] = useState('')
    const [check, setCheck] = useState(false)

    useEffect(()=>{
        const suscribed = onAuthStateChanged(auth, (currentUser)=>{
            if(!currentUser){
                console.log('no hay usuario');
                setUser('')
            }else{
                setUser(currentUser);
            }
        })
        return ()=> suscribed()
    },[])

    const login = async()=>{
        const responseGoogle = new GoogleAuthProvider();
        responseGoogle.setCustomParameters({
            prompt: 'select_account'
        });
        return await signInWithPopup(auth, responseGoogle)
    }

    const logout = async () => {
        const response = await signOut(auth);
        console.log(response)
    }

    return (
        <authContext.Provider
            value={{
                login,
                logout,
                user,
                check,
                setCheck
            }}
        >
            {children}
        </authContext.Provider>
    )
}
