import React, { Component } from 'react';

class FormularioTareas extends Component{
    constructor () {
        super();
        this.state = {
          titulo: '',
          responsable: '',
          descripcion: '',
          prioridad: 'low'
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }


      handleSubmit(e) {
        e.preventDefault();
        this.props.onAddTareas(this.state);
        this.setState({
          titulo: '',
          responsable: '',
          descripcion: '',
          Prioridad: 'low'
        });
      }
    
      handleInputChange(e) {
        const {value, name} = e.target;
        console.log(value, name);
        this.setState({
          [name]: value
        });
      }

    render(){
        return (
                  <div className="container">
                      <div className="row mt-4">
                        <div className="card">
                            <form onSubmit={this.handleSubmit} className="card-body">
                          <div className="form-group">
                            <input
                              type="text"
                              name="titulo"
                              className="form-control"
                              value={this.state.title}
                              onChange={this.handleInputChange}
                              placeholder="Titulo"
                              />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              name="responsable"
                              className="form-control"
                              value={this.state.responsible}
                              onChange={this.handleInputChange}
                              placeholder="Responsable"
                              />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              name="descripcion"
                              className="form-control"
                              value={this.state.description}
                              onChange={this.handleInputChange}
                              placeholder="Descripcion"
                              />
                          </div>
                          <div className="form-group">
                            <select
                                name="prioridad"
                                className="form-control"
                                value={this.state.priority}
                                onChange={this.handleInputChange}
                              >
                              <option>Bajo</option>
                              <option>Medio</option>
                              <option>Alto</option>
                            </select>
                          </div>
                          <button type="submit" className="btn btn-primary">
                            Save
                          </button>
                        </form>
                        </div>
                  
                      </div>
                 </div>        
        );
    }
}

export default FormularioTareas;