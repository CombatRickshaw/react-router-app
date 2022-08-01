import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import ColorGenerator from "./components/RandomColorGenerator/RandomColorGenerator";
import Counter from './components/Counter/Counter';
import Home from "./pages/Home/Home"

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/colorgenerator" element={<ColorGenerator />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
