import "./App.css";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Presentacion from "./components/presentacion";
import Resultados from "./components/resultados";
import Formulario from "./components/formulario";

export const App = () => {
  const [nombre, setNombre] = useState("");
  return (
    <>
      <Presentacion></Presentacion>
      <Formulario setNombre={setNombre}></Formulario>
      <Resultados nombre={nombre}></Resultados>
    </>
  );
};
