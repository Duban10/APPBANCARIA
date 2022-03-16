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
 
        <div className="container mt-5">
          {" "}
          {login ? (
            <div className="container mx-auto">
                <form onSubmit={handleFormSubmit} className="formReg">
                    <h3 className="mb-5">Registro</h3>

                    <div className="form-group mb-3">
                        <label className="mb-3">Nombre Completo</label>
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Escriba su nombre"
                        name="name"
                        onChange={(event) => setName(event.target.value)}
                        />
                    </div>

                    <div className="form-group mb-3">
                        <label className="mb-3">Identificación</label>
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Número de Documento"
                        onChange={(event) => setIdentificacion(event.target.value)}
                        />
                    </div>


                    <div className="form-group mb-3">
                        <label className="mb-3">Email</label>
                        <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>

                    <div className="form-group mb-5">
                        <label className="mb-3">Contraseña</label>
                        <input
                        type="password"
                        className="form-control"
                        placeholder="Escriba su contraseña"
                        onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>

                
                    <button type="submit" className="btn btn-dark btn-lg btn-block">
                        Guardar
                    </button>
                    <button onClick={handleClick} className="btn btn-primary btn-lg btn-block">
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
