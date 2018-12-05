import React, { Component } from 'react';

import tema  from '../tareas.json';

class Tarea extends Component{

    constructor() {
        super();

        console.log(tema);

        this.state = {
          tareas:tema.tareas
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
      
    render(){
        
        const tareas = this.state.tareas.map((tarea, i) => {

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
          })
          
          return (
            
              <div className="container">
                <div className="row mt-4">
                  {tareas}
                </div>
              </div>
         

        );
    
    

    }


}

export default Tarea;