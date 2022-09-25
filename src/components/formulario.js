import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Formulario = (props) => {
  const [nombre, setNombre] = useState("");
  const [notaMatematicas, setNotaMatematicas] = useState(null);
  const [notaEspaniol, setNotaEspaniol] = useState(null);
  const [notaGeografia, setNotaGeografia] = useState(null);

  const submitForm = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div className="App">
      <div className="container col-8 my-5 br-2 rounded">
        <div className="row g-3">
          <div className="col-6">
            <div className="card bg-primary text-center">
              <h3>Notas</h3>
            </div>
            <form className="row g-3 needs-validation" onSubmit={submitForm}>
              <div className="row">
                <div className="col-12 mt-3">
                  <label className="form-label" htmlFor="firstname">
                    Nombre completo del estudiante
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    className="form-control"
                    onChange={(event) => setNombre(event.target.value)}
                    value={nombre}
                    required
                  />
                  <div className="invalid-feedback">
                    Ingrese el Nombre del Estudiante
                  </div>
                </div>

                <div className="col-4 mt-3">
                  <label className="form-label">Matematicas</label>
                  <input
                    type="number"
                    id="notaMat"
                    name="nomtaMat"
                    onChange={(event) => setNotaMatematicas(event.target.value)}
                    value={notaMatematicas}
                    min="0"
                    className="form-control"
                    required
                  />
                  <div className="invalid-feedback">Obligatorio</div>
                </div>
                <div className="col-4 mt-3">
                  <label className="form-label">Español</label>
                  <input
                    type="number"
                    id="notaEsp"
                    onChange={(event) => setNotaEspaniol(event.target.value)}
                    value={notaEspaniol}
                    min="0"
                    className="form-control"
                    required
                  />
                  <div className="invalid-feedback">Obligatorio</div>
                </div>
                <div className="col-4 mt-3">
                  <label className="form-label">Geografia</label>
                  <input
                    type="number"
                    min="0"
                    id="notaGeo"
                    onChange={(event) => setNotaGeografia(event.target.value)}
                    value={notaGeografia}
                    className="form-control"
                    required
                  />
                  <div className="invalid-feedback">Obligatorio</div>
                </div>
              </div>
              <div className="mt-5">
                <div className="form-check">
                  <label className="form-check-label">
                    Introduzca la nota correspondiente a cada materia, tenga en
                    cuenta que la casilla solo aceptara números de 1 a 10, el
                    botón promedio arrojara su nota final.
                  </label>
                </div>
              </div>
              <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                >
                  Promedio
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
