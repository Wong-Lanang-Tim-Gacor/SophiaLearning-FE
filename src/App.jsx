import React from 'react'
import Routers from './routes/Routers'
import {AuthProvider} from '@/contexts/AuthContext';
import { GlobalProvider } from './contexts/GlobalContext';

const App = () => {
  return (
    <>
        <AuthProvider>
          <GlobalProvider>
              <Routers />
          </GlobalProvider>
        </AuthProvider>
    </>
  )
}

export default App