import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import DailyQuote from "./pages/DailyQuote";
import Expense from "./pages/Expense";
import Gym from "./pages/Gym";

function App() {

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const changeTheme = () => {
    setIsDarkTheme((theme) => !theme);
  }

  return (
    <div className={`min-h-screen py-8 ${isDarkTheme ? "bg-slate-900" :"bg-slate-200" } `}>
      <BrowserRouter>
        <Header isDarkTheme={isDarkTheme} changeTheme={changeTheme} />
        <Routes>
          <Route path="/expense" element={<Expense isDarkTheme={isDarkTheme} />} />
          <Route path="/dailyquote" element={<DailyQuote isDarkTheme={isDarkTheme} />} />
          <Route path="/gym" element={<Gym isDarkTheme={isDarkTheme} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
