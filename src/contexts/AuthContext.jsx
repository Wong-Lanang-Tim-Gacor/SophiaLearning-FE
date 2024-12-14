import AuthReducer from '@/reducers/AuthReducer'
import { createContext, useReducer } from 'react'

const AuthContext = createContext()

const initialState = {
    isLoading: true,
    auth: sessionStorage.getItem('token') ? true : false,
    token: sessionStorage.getItem('token') || null
}

export const AuthProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState)
    return (
        <AuthContext.Provider value={{state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext