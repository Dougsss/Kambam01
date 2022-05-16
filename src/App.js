import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./componets/Header/index";
import Footer from "./componets/Footer/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route />
          <Route />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
