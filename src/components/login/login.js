import React,{useState, useRef}  from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-validation/build/form'
import CheckButton from "react-validation/build/button";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput } from 'mdb-react-ui-kit';
import './login.css'
import AuthService from '../services/auth.service';

import md5 from 'md5';

const Login = () => {
  let navigate = useNavigate();

  const form = useRef();
  const checkBtn = useRef();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUser = (e) => {
    const user = e.target.value;
    setUser(user);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(user, md5(password)).then(
        () => {
          navigate("/home");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };
  



  return (
    <>
    <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>
    <div class="content"></div>
      <MDBContainer fluid >

              <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                  <MDBCol col='12'>

                      <MDBCard className='bg-white text-dark my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '250px' }}>

                      <Form onSubmit={handleLogin} ref= {form}>
                          <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                              <h2 className="fw-bold mb-2 text-uppercase">GNOSIS</h2>
                              <p className="text-dark-50 mb-5">Porfavor ingrese su usuario y contrasena</p>
                            
                              <MDBInput wrapperClass='mb-4 mx-5 w-100' 
                                labelClass='text-dark' 
                                label='Usuario' id='formControlLg' 
                                type='text' size="lg" 
                                value={user}
                                onChange={onChangeUser}
                                
                              />

                              <MDBInput wrapperClass='mb-4 mx-5 w-100' 
                                labelClass='text-dark' 
                                label='Contrasena' id='formControlLg' 
                                type='password' size="lg" 
                                value={password}
                                onChange={onChangePassword}
                              />

                              <p className="small mb-3 pb-lg-2"><a class="text-dark-50" href="#!">Olvidaste tu contrasena?</a></p>
                              <MDBBtn outline className='mx-2 px-5' color='dark' size='lg' disabled={loading}>
                                {loading && (
                                  <span className="spinner-border spinner-border-sm"></span>
                                )}
                                Entrar
                              </MDBBtn>
                              {message && (
                                <div className="form-group">
                                  <div className="alert alert-danger" role="alert">
                                    {message}
                                  </div>  
                                </div>
                              )}
                              <CheckButton style={{ display: "none" }} ref={checkBtn} />
                            
                              
                          </MDBCardBody>
                          </Form>

                      </MDBCard>

                  </MDBCol>
              </MDBRow>

          </MDBContainer></>
    
  );
}

export default Login;