import React, { useState } from "react";
import { Alert } from "bootstrap";
import Home from "./Principal";

function Login() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);
  
  
  const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage
      .getItem("sanskarPassword")
      .replace(/"/g, "");
    let mail = localStorage.getItem("sanskarEmail").replace(/"/g, "");
    

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  }


  return (
    <div>
      
        {home ? (
          <div className="container-f">
            <form onSubmit={handleLogin} className="formReg">
              <h3 className="mb-5">Iniciar Sesión</h3>
              <div className="form-group mb-3">
                <label className="mb-3">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(event) => setEmaillog(event.target.value)}
                />
              </div>

              <div className="form-group mb-3">
                <label className="mb-3">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(event) => setPasswordlog(event.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-dark btn-lg btn-block">
                Ingresar
              </button>
              

              {flag && (
                <Alert color="primary" variant="warning">
                  Todos los campos son importantes
                </Alert>
              )}
            </form>
          </div>
        ) : (
          <Home />
        )}
     
    </div>
  );
}

export default Login;
