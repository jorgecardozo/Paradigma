import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*Validar Children*/
import PropTypes from 'prop-types'; 

/*importando componentes*/

import { Alert } from 'reactstrap';


import Navegacion from './Componentes/Navegacion';
import FormularioTareas from './Componentes/FormularioTareas';
import { tareas } from './tareas.json';

import AppRoutes from './rutas';

import Tarea from './Componentes/Tarea';

class App extends Component {

  constructor() {
    super();
    this.state = {
      tareas//,
      //activado: false,
    };

    this.handleAddTarea = this.handleAddTarea.bind(this);
  }

  removeTarea(index) {
    this.setState({
      tareas: this.state.tareas.filter((e, i) => {
        return i !== index
      })
    });
  }

  handleAddTarea(tarea) {
    this.setState({
      tareas: [...this.state.tareas, tarea]
    })
  }

  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    //const { activado } = this.state;
    /*const tareas = this.state.tareas.map((tarea, i) => {

      return (
        <div className="col-md-4">
          <div className="card mt-4">

            <div className="card-header">
              <h3>{tarea.titulo}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {tarea.prioridad}
              </span>
            </div>

            <div className="card-body">
              <p>{tarea.descripcion}</p>
              <p><mark>{tarea.responsable}</mark></p>
            </div>

            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.removeTarea.bind(this, i)}>
                Eliminar
                  </button>
            </div>

          </div>
        </div>
      );
    })*/

    return (
        <div className="App">

          <Navegacion /*activado={activado}*/ />

          <img src={logo} className="App-logo" alt="logo" />

          
          

          <div className="container">
            <div className="row mt-4">
              <AppRoutes/>
           
            </div>
          </div>


          
        </div>

    );
  }
}

export default App;