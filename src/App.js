import "./App.css";
import LoginandSignup from "./component/LoginandSignup";
import Navbar from "./component/Navbar";
import Login from "./login/Login";
import Signup from "./signup/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
     
      <Routes>
        <Route path="/" element={ <LoginandSignup />}/>
        <Route path="/backsignin" element={<LoginandSignup/>}/>
        <Route path="/backlogin" element={<LoginandSignup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/navbar" element={<Navbar/>}/>
      </Routes>
      </BrowserRouter>
      {/* <Navbar/>
  <Signup/>
  <Login/> */}
    </>
  );
}

export default App;
