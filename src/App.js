import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import RouteTest from "./components/RouteTest";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import New from "./pages/New";

function App() {
  return (
    <BrowserRouter>
      <div className="App">App.js</div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/diary" element={<Diary />} />
      </Routes>
      <RouteTest />
    </BrowserRouter>
  );
}

export default App;
