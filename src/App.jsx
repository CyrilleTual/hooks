import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from "./Pages/Home/Index";
import Form from "./Pages/Form/Index";
import Header from './Components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
 