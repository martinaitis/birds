import Quiz from "./components/Quiz";
import Admin from "./components/Admin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
