import { BrowserRouter, Routes, Route } from "react-router-dom";
import { VerifyYourAge } from "./components/VerifyAge";
import { Signup } from "./components/Signup";
import { Otp } from "./components/Otp";
import { Dashboard } from "./components/Dashboard";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VerifyYourAge />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/otp" element={<Otp number={6} />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
