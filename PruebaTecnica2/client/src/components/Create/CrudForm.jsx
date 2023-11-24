import './style.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function CrudForm() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [sexo, setSexo] = useState('masculino, femenino'); 
  const [id_area, setIdArea] = useState('Administración'); 
  const [descripcion, setDescripcion] = useState('');
  const [boletin, setBoletin] = useState(false); 

  useEffect(() => {
    axios.get('http://localhost:5001/empleados')
    .catch(error => {
      if (error.response) {
        console.error('Error de respuesta del servidor:', error.response.data);
      } else if (error.request) {
        console.error('Error de solicitud:', error.request);
      } else {
        console.error('Error:', error.message);
      }
      console.error('Error en el envío de datos al servidor:', error);
    });
  }, []);

  const addEmpleado = () => {
    axios.post('http://localhost:5001/empleados', {
      nombre,
      email,
      sexo,
      id_area: id_area, 
      descripcion,
      boletin
    })
    .catch(error => {
      if (error.response) {
        console.error('Error de respuesta del servidor:', error.response.data);
      } else if (error.request) {
        console.error('Error de solicitud:', error.request);
      } else {
        console.error('Error:', error.message);
      }
      console.error('Error en el envío de datos al servidor:', error);
    });
  };


  return (
    <div className="App">
        <div className="datos">
      <Link  class="linkStyle" to="/ " ><i className="fa-solid fa-circle-left"></i>Regresar</Link>
          <div className="form-group">
            <label htmlFor="nombre"><b>Nombre Completo*</b></label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              placeholder="Nombre"
              value={nombre} onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email"><b>Correo Electrónico*</b></label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Email"
              value={email} onChange={(e) => setEmail(e.target.value)}
            />
          </div>
  
          <label><b>Sexo*</b></label>
          <div className="form-check" value={sexo} onChange={(e) => setSexo(e.target.value)}>
            <input
              className="form-check-input"
              type="radio"
              name="sexo"
              id="masculino"
              value="masculino"
              checked
            />
            <label className="form-check-label" htmlFor="masculino">
              Masculino
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="sexo"
              id="femenino"
              value="femenino"
            />
            <label className="form-check-label" htmlFor="femenino">
              Femenino
            </label>
          </div>
  
          <div className="form-group">
            <label htmlFor="area" 
             ><b>Área*</b>
            </label>
            <select className="form-control" id="area" value={id_area} onChange={(e) => setIdArea(e.target.value)}> 
              <option>Administración</option>
              <option>Cliente</option>
              <option>Operador</option>
              <option>Auxiliar</option>
              <option>Recepcionistas</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="descripcion"
            ><b>Descripción*</b></label>
            <textarea
              className="form-control"
              id="descripcion"
              placeholder="Descripción de la experiencia del empleado"
              rows="3"
              value={descripcion} onChange={(e) => setDescripcion(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group row">
            <div className="col-sm-12 ">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="boletin"
                  value={boletin} onChange={(e) => setBoletin(e.target.value)}
                />
                <label className="form-check-label" htmlFor="boletin">
                  Deseo recibir boletín informativo
                </label>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-2"><b>Roles*</b></div>
            <div className="col-sm-10">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="profecionalProyecto"
                />
                <label className="form-check-label" htmlFor="profecionalProyecto">
                  Profesional de proyecto - Desarrollador
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gerente"
                />
                <label className="form-check-label" htmlFor="gerente">
                  Gerente estratégico
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="auxiliarAdministrativo"
                />
                <label className="form-check-label" htmlFor="auxiliarAdministrativo">
                  Auxiliar administrativo
                </label>
              </div>
            </div>
          </div>
          <button className="btn btn-primary" onClick={addEmpleado}>Guardar</button>
        </div>
      </div>
    );
  }
  
  export default CrudForm
