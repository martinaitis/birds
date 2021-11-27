import Quiz from "./components/Quiz";
import Admin from "./components/Admin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyThemeProvider from "./contexts/MyThemeProvider";

function App() {
  return (
    <MyThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </MyThemeProvider>
  );
}

export default App;
