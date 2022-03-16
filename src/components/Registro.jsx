import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import Login from "./Login";

function Registro() {
  const [name, setName] = useState("");  
  const [identificacion, setIdentificacion] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  


  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !identificacion || !email || !password ) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("sanskarEmail", JSON.stringify(email));
      localStorage.setItem(
        "sanskarPassword",
        JSON.stringify(password)
      );
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }

 
  

  return (
    <>
 
        <div className="container">
          {" "}
          {login ? (
            <div className="row col-md-6 offset-md-3 mt-5">
                <form onSubmit={handleFormSubmit} className="formr">
                    <h3 className="display-5 mb-5"><strong>REGISTRO</strong></h3>

                    <div className="form-floating mb-3">          
                        <input
                        type="text"
                        className="form-control"
                        id="floatingNombre"
                        placeholder="Escriba su nombre"
                        name="name"
                        onChange={(event) => setName(event.target.value)}
                        />
                        <label for="floatingNombre">Nombre Completo</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                        type="text"
                        className="form-control"
                        id="floatingId"
                        placeholder="Número de Documento"
                        onChange={(event) => setIdentificacion(event.target.value)}
                        />
                        <label for="floatingId">Identificación</label>
                    </div>


                    <div className="form-floating mb-3">
                        <input
                        type="email"
                        className="form-control"
                        id="floatingEmail"
                        placeholder="Enter email"
                        onChange={(event) => setEmail(event.target.value)}
                        />
                        <label for="floatingEmail">Email</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                        type="password"
                        id="floatingPassword"
                        className="form-control"
                        placeholder="Escriba su contraseña"
                        onChange={(event) => setPassword(event.target.value)}
                        />
                        <label for="floatingPassword">Contraseña</label>
                    </div>

                
                    <button type="submit" className="btn btn-dark btn-lg btn-block">
                        Guardar
                    </button>
                    <button onClick={handleClick} className="btn btn-success  btn-lg btn-block ">
                        Iniciar sesion
                        
                    </button>
                    {flag && (
                        <Alert color="primary" variant="danger">
                        Todos los campos son Obligatorios
                        </Alert>
                    )}
                </form>
            </div>
          ) : (
            <Login />
          )}
        </div>
    
    </>
  );
}

export default Registro;
