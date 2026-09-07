import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import AnalyticsPageView from "./components/AnalyticsPageView";
// import AgendaBel from "./pages/AgendaBel";

function App() {
  return (
    <BrowserRouter>
      <AnalyticsPageView />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/proyectos/agendabel" element={<AgendaBel />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
