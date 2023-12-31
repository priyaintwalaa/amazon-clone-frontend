import React, { createContext, useState } from 'react'

export const AuthContext = createContext();
export const AuthProvider = ({children}) =>{
    const getToken = localStorage.getItem('token') || ''
    const [token,setToken] = useState(getToken)

    const logIn = (token) =>{
        localStorage.setItem('token',token)
        setToken(token)
    }

    const logOut = () =>{
        localStorage.removeItem('token')
        setToken('')
    }

    return (
        <AuthContext.Provider value={{token,logIn,logOut}}>
            {children}
        </AuthContext.Provider>
    )
}
