import React from 'react'
import Routers from './routes/Routers'
import {AuthProvider} from "@/contexts/AuthContext.jsx";

const App = () => {
  return (
    <>
        <AuthProvider>
            <Routers />
        </AuthProvider>
    </>
  )
}

export default App