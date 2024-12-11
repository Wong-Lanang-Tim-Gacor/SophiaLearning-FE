import { createContext, useState } from "react";

const AuthContext = createContext('not logged in')

export const AuthProvider = ({children}) => {
    const [status, setStatus] = useState('not logged in')
    return (
        <AuthContext.Provider value={{status, setStatus}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;