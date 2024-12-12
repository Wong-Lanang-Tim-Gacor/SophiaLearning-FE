import AuthContext from '@/contexts/AuthContext'
import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
    const {state} = useContext(AuthContext)
    
    if (!state.auth) return <Navigate to='/login'/>
    return <Outlet/>
}

export default ProtectedRoute