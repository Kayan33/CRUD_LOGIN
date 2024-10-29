import { BrowserRouter, Route, Routes } from "react-router-dom";
import Formulario from "../components/formulario/formulario";
import Login from "../components/login/login";
function NaoAutenticados() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>}></Route>
        <Route path="/formulario" element={<Formulario/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default NaoAutenticados;
