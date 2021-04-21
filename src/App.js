import './App.css';
import Formulario from './Components/MasForms';
import React, { useState } from 'react';
function App() {
  const [form,setForm] = useState({
    nombre:"",
    apellido:"",
    email:"",
    telefono:"",
    rut:"",
    password:"",
    confirm:""
  })
  return (
    <div className="App">
      <h1>Hola Bienvenido al Formulario!</h1>
      <h2>Porfavor Registre sus Datos Personales</h2>
      <Formulario form={form} setForm ={setForm}/>
    </div>
  );
}

export default App;
