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
          <div className="container">
              <div className="row col-md-6 offset-md-3 mt-5">
                <form onSubmit={handleLogin} className="formReg">
                <h3 className="display-5 mb-5"><strong>INICIAR SESIÓN</strong></h3>

                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingEmail"
                      placeholder="Enter email"
                      onChange={(event) => setEmaillog(event.target.value)}
                    />
                    <label for="floatingEmail">Email</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Enter password"
                      onChange={(event) => setPasswordlog(event.target.value)}
                    />
                    <label for="floatingPassword">Password</label>
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
          </div>
        ) : (
          <Home />
        )}
     
    </div>
  );
}

export default Login;
