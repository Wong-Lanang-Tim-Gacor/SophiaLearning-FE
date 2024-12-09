import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from '../pages/Landing'

const Routers = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/landing' element={<Landing/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Routers