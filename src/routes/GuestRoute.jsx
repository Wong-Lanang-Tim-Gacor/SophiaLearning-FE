import AuthContext from '@/contexts/AuthContext'
import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const GuestRoute = () => {
    const {state} = useContext(AuthContext)
    if(state.auth) return <Navigate to='/'/>
    return <Outlet/>
}

export default GuestRoute