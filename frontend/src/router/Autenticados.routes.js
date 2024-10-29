import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashborad from "../components/DashBoard/DashBoard";

function Autenticados() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Dashborad/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Autenticados;
