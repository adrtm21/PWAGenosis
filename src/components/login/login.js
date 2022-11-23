import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput } from 'mdb-react-ui-kit';
import './login.css'

function App() {
  return (
    <>
    <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>
    <div class="content"></div>
      <MDBContainer fluid>

              <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                  <MDBCol col='12'>

                      <MDBCard className='bg-white text-dark my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '250px' }}>
                          <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                              <h2 className="fw-bold mb-2 text-uppercase">GNOSIS</h2>
                              <p className="text-dark-50 mb-5">Porfavor ingrese su usuario y contrasena</p>

                              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-dark' label='Usuario' id='formControlLg' type='email' size="lg" />
                              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-dark' label='Contrasena' id='formControlLg' type='password' size="lg" />

                              <p className="small mb-3 pb-lg-2"><a class="text-dark-50" href="#!">Olvidaste tu contrasena?</a></p>
                              <MDBBtn outline className='mx-2 px-5' color='dark' size='lg'>
                                  Entrar
                              </MDBBtn>

                          </MDBCardBody>
                      </MDBCard>

                  </MDBCol>
              </MDBRow>

          </MDBContainer></>
    
  );
}

export default App;