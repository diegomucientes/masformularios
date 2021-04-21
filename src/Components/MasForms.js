import React, { useState,useRef} from 'react';
import './MasForms.css';  

const Formulario = (props) =>{
    const {form,setForm} = props;

    const [errors,setErrors] = useState ({
        firstNameE: "",
        lastNameE: "",
        emailE: "",
        telefonoE:"",
        rutE:"",
        passwordE: "",
        confirmPasswordE: "",
        
    })
    const passwordRef=useRef(null);
    const cPasswordRef=useRef(null);
    const [iguales,setIguales] =useState(true);

   
    const onChange = (e)=>{
        setForm ({
            ...form,
            [e.target.name] : e.target.value
        });
        
        
        if(e.target.name === "nombre" && e.target.value.length <2){
            setErrors({
                ...errors,
                firstNameE:"El nombre debe tener al menos dos caracteres por favor..."
    
            });
        }

        if (e.target.name === "nombre" && (e.target.value.lengt >=2 || e.target.value.length === 0)){
            setErrors({
                ...errors,
                firstNameE:""
            })
        }
        if (e.target.name === "apellido" && e.target.value.length < 2){
            setErrors({
                ...errors,
                lastNameE:"El apellido debe tener más de 2 caracteres por favor..."
            })
        }
        if (e.target.name === "apellido" && (e.target.value.length>=2 || e.target.value.length === 0)){
            setErrors({
                ...errors,
                lastNameE:""
            })
        }
        const regexNum = /^[0-9\b]+$/ ;
        if(!regexNum.test.telefono){
            setErrors({
                ...errors,
                telefonoE:"El numero solo puede contener numeros"
    
            });
        }
        if(e.target.name === "celular" && e.target.value.type < 9){
            setErrors({
                errors,
                emailE:"El numero debe tener al menos 9 digitos"
            })
        }
        if(e.target.name === "celular" && (e.target.value.length >= 5 || e.target.value.length === 0)){
            setErrors({
                errors,
                emailE:""
            })
        }
        if(e.target.name === "email" && e.target.value.length < 5){
            setErrors({
                errors,
                emailE:"El correo debe tener al menos 5 caracteres..."
            })
        }
        if(e.target.name === "email" && (e.target.value.length >= 5 || e.target.value.length === 0)){
            setErrors({
                errors,
                emailE:""
            })
        }
        if (e.target.name === "password" && e.target.value.length < 8){
            setErrors({
                errors,
                passwordE:"La contraseña debe tener al menos 8 caracteres..."
            })
        }
        if (e.target.name === "password" && e.target.value.length>=8 || e.target.value.length === 0){
            setErrors({
                errors,
                passwordE:""
            })
        }
        const valp = passwordRef.current.value;
        const valcp = cPasswordRef.current.value;
    
        setIguales(valp===valcp); 
    
        
    }
    const createUser = (e)=>{
        e.preventDefault();
        e.target.reset();
        console.log(Object.values(errors));
        const newUser = {form};
        console.log("Hola nueva Usuario",newUser);
        setForm({nombre:"",apellido:"",email:"",telefono:"",rut:"",password:"",confirm:""});

    };
  
 
    return(
         <form className="form" onSubmit={createUser}>
            <div className="box1">
                <label htmlFor="nombre"className="label">Nombres:</label>
                <input onChange={onChange}className="input"name="nombre"></input>
                <p> {errors.firstNameE} </p>          
            </div>
            <div className="box2">
                <label htmlFor="apellido"className="label">Apellidos:</label>
                <input onChange={onChange}className="input"name="apellido"></input>
                <p> {errors.lastNameE} </p>
            </div>
            <div className="box3">
                <label htmlFor="email"className="label">Correo:</label> 
                <input onChange={onChange}className="input" name="email"></input>
                <p> {errors.emailE} </p>
            </div>
            <div className="box4">
                <label htmlFor="telefono"className="label">Celular:</label> 
                <input onChange={onChange}className="input"name="telefono"></input>
                <p> {errors.telefonoE} </p>
            </div>
            <div className="box5">
                <label htmlFor="rut"className="label">Rut::</label>
                 <input onChange={onChange}className="input" name="rut"></input>
                 <p> {errors.rutE} </p>
            </div>
            <div className="box6">
                <label htmlFor="password"className="label">Contraseña:</label>
                <input onChange={onChange}className="input"name="password" ref={passwordRef}></input>
                <p> {errors.passwordE} </p>
            </div>
            <div className="box7">
                <label htmlFor="confirm"className="label">Confirmar Contraseña:</label>
                <input className="input"name="confirm" ref={cPasswordRef}></input>
                <p> {iguales ? '' :'Las contraseñas deben ser iguales'}</p>
            </div>
            <button>Submit</button>
        </form>
    )
}

export default Formulario;