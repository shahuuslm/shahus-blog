import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import SIgnUp from "./Pages/SIgnUp";
import SignIn from "./Pages/SignIn";
import Dashboard from "./Pages/Dashboard";
import Projects from "./Pages/Projects";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signUp" element={<SIgnUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;