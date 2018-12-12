import React, { Component } from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios'
class ModalActualizar extends Component{
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          nombreA: '',
            apellidoA: '',
            tipoA: 1,
            documentoA: '',
            emailA: '',
            idA: ''
        }
    }
    
    toggle= ()=> {
        this.setState({
            modal: !this.state.modal
        });
        //this.handleSubmit();
    }

    datos = () =>{
        this.setState({
            nombreA: this.props.persona.nombre,
            apellidoA: this.props.persona.apellido,
            tipoA: this.props.persona.tipoDocumento,
            documentoA: this.props.persona.documento,
            emailA: this.props.persona.email,
            idA: this.props.persona.id
        });
        this.toggle();
    }

    DatosActualizar = () => {
        
       
        axios.put('http://10.0.0.68:81/personas/'+this.state.idA+"/",{
                    nombre: this.state.nombreA,
                    apellido: this.state.apellidoA,
                    tipoDocumento: this.state.tipoA,
                    documento: this.state.documentoA,
                    email: this.state.emailA
                })
                    .then( (response)=> {
                        // handle success
                        console.log(response);

                        console.log("Entro al actualizar");
                        //console.log(this.props.onChange);
                        
                        /*if(this.props.onChange)
                            this.props.onChange();*/
                            this.actualizar();
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
                    .then(function () {
                        // always executed
                    });
        if(this.props.actualizar)
            this.props.actualizar();
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
    validarString = (e) => {
        const { value, name } = e.target;
        var expresionRegular = /^\w{0,10}$/;
        if (expresionRegular.test(value)) {
            console.log(value, name);
            // console.log("Error");
            this.setState({
                [name]: value
            });
        }

    }

    handleTipoA = (e) => {
        const { value, name } = e.target;
        let valor;
        (value == "DNI") ? valor = 1 : (value == "Cedula") ? valor = 2: valor=3; 
        console.log("valor de Tipo documento");
        console.log(valor);
        this.setState({
            tipoA: valor
        });

    }
    render() {
        return (  
          <div>
            {/* <Button color="danger" onClick={()=>this.eliminar(persona.id)}>Eliminar</Button> */}

            <Button color="danger" onClick={this.datos}>Actualizar</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Actualizar Datos</ModalHeader>
              <ModalBody>
                <div className="row mt-4">
                                <div className="card">
                                    <form 
                                        // onSubmit={} 
                                        className="card-body">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="nombreA"
                                                className="form-control"
                                                value={this.state.nombreA}
                                                onChange={this.validarString}
                                                placeholder="Nombre"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="apellidoA"
                                                className="form-control"
                                                value={this.state.apellidoA}
                                                onChange={this.validarString}
                                                placeholder="Apellido"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <select
                                                name="tipoA"
                                                className="form-control"
                                                // value={}
                                                onChange={ this.handleTipoA}
                                            >
                                                <option>DNI</option>
                                                <option>Cedula</option>
                                                <option>Pasaporte</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="documentoA"
                                                className="form-control"
                                                value={this.state.documentoA}
                                                onChange={this.validarNumero}
                                                placeholder="Documento"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="emailA"
                                                className="form-control"
                                                value={this.state.emailA}
                                                onChange={this.validarMail}
                                                placeholder="Email"
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={()=>this.DatosActualizar()}>Actualizar</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </div>
        );
      }
}

export default ModalActualizar;