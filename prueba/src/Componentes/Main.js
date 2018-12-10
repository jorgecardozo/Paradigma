import React, { Component } from 'react';

import axios from 'axios'
import Tablas from './Tablas';

class Main extends Component {


    constructor() {
        super();
        this.state = {
            nombre: '',
            apellido: '',
            tipo: 1,
            documento: '',
            email: '',
            datos: []
        }
    }

    componentDidMount(){
             this.actualizar();
    }

    actualizar =(e)=>{

        console.log("LLamo a la funcion Actualizar");
      
        axios.get('http://10.0.0.68:81/personas/')
            .then((response)=> {
                console.log("Las pido");
                console.log(response.data.data);

                this.setState({ datos: response.data.data }, () => {
                    console.log("veo si actualizo en datos");
                    console.log(this.state.datos);
                });
            })
            .catch(function (error) {
                console.log(error);
            });


    }
    

    validarNumero = (e) => {
        const { value, name } = e.target;
        var expresionRegular = /^\d{0,8}$/;
        if (expresionRegular.test(value)) {
            console.log(value, name);
            // console.log("Error");
            this.setState({
                [name]: value
            });
        }

    }

    validarMail = (e) => {
        const { value, name } = e.target;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        console.log("Valor del Boton");
        console.log(e.value);

        const { value, name } = e.target;
        var expresionRegular = /^[a-zA-Z0-9_\-\.~]{2,}@[a-zA-Z0-9_\-\.~]{2,}\.[a-zA-Z]{2,4}$/;
        console.log(value, name);
        if (expresionRegular.test(this.state.email)) {
            console.log("valido");

              axios.post('http://10.0.0.68:81/personas/', {
                nombre: this.state.nombre,
                apellido: this.state.apellido,
                tipoDocumento: this.state.tipo,
                documento: this.state.documento,
                email: this.state.email
              })
              .then(function (response) {
                console.log("Esto se envia a la base de datos");
                console.log(response.data.data);
              })
              .catch(function (error) {
                console.log(error);
              });    
        }
        else
            console.log("Invalido");

            
    }

    validarString = (e) => {
        const { value, name } = e.target;
        var expresionRegular = /^\w{0,5}$/;
        if (expresionRegular.test(value)) {
            console.log(value, name);
            // console.log("Error");
            this.setState({
                [name]: value
            });
        }

    }

    handleTipo = (e) => {
        const { value, name } = e.target;
        let valor;
        (value == "DNI") ? valor = 1 : (value == "Cedula") ? valor = 2: valor=3; 
        console.log("valor de Tipo documento");
        console.log(valor);
        this.setState({
            tipo: valor
        });

    }



    render() {
        { console.log("dentro de main, antes de mandar DB") }
        { console.log(this.state.datos) }
        return (


            <div className="container">
                <Tablas db={this.state.datos} onChange={this.actualizar}/>

                <div className="row mt-4">
                    <div className="card">
                        <form onSubmit={this.handleSubmit}
                            // onSubmit={} 
                            className="card-body">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="nombre"
                                    className="form-control"
                                    value={this.state.nombre}
                                    onChange={this.validarString}
                                    placeholder="Nombre"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="apellido"
                                    className="form-control"
                                    value={this.state.apellido}
                                    onChange={this.validarString}
                                    placeholder="Apellido"
                                />
                            </div>
                            <div className="form-group">
                                <select
                                    name="tipo"
                                    className="form-control"
                                    // value={}
                                    onChange={ this.handleTipo}
                                >
                                    <option>DNI</option>
                                    <option>Cedula</option>
                                    <option>Pasaporte</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="documento"
                                    className="form-control"
                                    value={this.state.documento}
                                    onChange={this.validarNumero}
                                    placeholder="Documento"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="email"
                                    className="form-control"
                                    value={this.state.email}
                                    onChange={this.validarMail}
                                    placeholder="Email"
                                />
                            </div>


                            <button type="submit" className="btn btn-primary" onClick={this.actualizar}>
                                Save
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}

export default Main;