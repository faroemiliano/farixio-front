import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import ChatBot from "./components/ChatBot";
// import AgendaBel from "./pages/AgendaBel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/proyectos/agendabel" element={<AgendaBel />} /> */}
      </Routes>
      <ChatBot />
    </BrowserRouter>
  );
}

export default App;
