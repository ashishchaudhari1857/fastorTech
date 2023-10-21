import { useState } from 'react'
import Homepage from './Components/Homepage'
 import OtpPage from './Components/OtpPage'
 import VerifyOTP from './Components/VerifyOTP'
import { Routes, Route } from "react-router-dom";
import Deatails from './Components/Deatails';

function App() {

  return (
    <>
    <div className="App">
      <Routes>
        <Route index element={<OtpPage />} />
        <Route path="/verification" element={<VerifyOTP />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/detail/:id" element={<Deatails />} />

      </Routes>
    </div>
    </>
  )
}

export default App
