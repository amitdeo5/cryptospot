import HomePage from "./Pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import CoinPage from './Pages/CoinPage';

function App() {
  return (
   <BrowserRouter>

<div>
<Header />
   <Routes>
  <Route path="/" element={<HomePage/>} />
  <Route path="/coins/:id" element={<CoinPage/>}/>
  </Routes>
</div>

   </BrowserRouter>
  );
}

export default App;
