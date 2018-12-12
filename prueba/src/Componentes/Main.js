import React, { Component } from 'react';

import axios from 'axios'
import Tablas from './Tablas';
import ModalEliminar from '../Componentes/ModalEliminar';

import {Row, Col, Table ,Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ModalActualizar from './ModalActualizar';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            apellido: '',
            tipo: 1,
            documento: '',
            email: '',
            datos: [],
            activado: false,
            nombreA: '',
            apellidoA: '',
            tipoA: 1,
            documentoA: '',
            emailA: '',
            idA: '',
            modal: false,
            modalEliminar: false,
            modalActualiar: false,
            BotonEliminar: false,
            BotonActualizar: false
        }
    }

    toggle= ()=> {
        this.setState({
          modal: !this.state.modal
        });
        //this.handleSubmit();
      }
      toggleEliminar= ()=> {
        this.setState({
          modalEliminar: !this.state.modalEliminar
        });
        //this.handleSubmit();
      }
      toggleActualizar= ()=> {
        this.setState({
          modalActualizar: !this.state.modalActualizar
        });
        //this.handleSubmit();
      }
    componentDidMount(){
             this.actualizar();
    }

    ActivarEstado = () =>{
        this.setState({activado: !this.state.activado});
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
        // e.preventDefault();

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
              .then((response)=> {
                console.log("Esto se envia a la base de datos");
                console.log(response.data.data);
                this.toggle();
                this.actualizar();
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
        var expresionRegular = /^\w{0,10}$/;
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


    eliminar  = (e) =>{

        axios.delete('http://10.0.0.68:81/personas/'+e)
            .then( (response)=> {
                    this.actualizar();
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    HandleActualizar  = (e) =>{
        e.preventDefault();

        console.log("id: ",this.state.idA);
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
        this.ActivarEstado();
    }

    DatosActualizar = (e) => {
        console.log("activado antes: ",this.state.activado);
        let estado=this.state.activado;
        this.setState({
            nombreA: e.nombre,
            apellidoA: e.apellido,
            tipoA: e.tipoDocumento,
            documentoA: e.documento,
            emailA: e.email,
            idA: e.id
        });

        this.ActivarEstado();
        console.log("activado despues: ",this.state.activado);
    }

    render() {
        { console.log("dentro de main, antes de mandar DB") }
        { console.log(this.state.datos) }
        return (

            <div className="container">

               
                    <Row>
                        <Col xs="1">
                            <Button color="success" onClick={this.toggle}>Cargar</Button>
                            <br/>
                            <br/>
                        </Col>
                    </Row>

                    <Row>
                        <Table dark>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Tipo DNI</th>
                                    <th>Documento</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody >
                                {console.log("dentro de la tabla")}
                                {console.log(this.props.db)}
                                {   this.state.datos.map((persona, i) => 
                                    <tr key={i}>
                                        <th scope="row">{persona.id}</th>
                                        <td>{persona.nombre}</td>
                                        <td>{persona.apellido}</td>
                                        <td>{persona.tipoDocumento}</td>
                                        <td>{persona.documento}</td>
                                        <td>{persona.email}</td>
                                        {/* <td> <Button color="danger" onClick={()=>this.eliminar(persona.id)}>Eliminar</Button> </td> */}
                                        <td> <ModalEliminar actualizar={this.actualizar} id={persona.id}/></td>
                                        <td> <ModalActualizar datosActualizar={this.DatosActualizar} actualizar={this.actualizar} persona={persona}/></td>
                                    </tr>
                                    )}
                            </tbody>
                        </Table>
                    </Row>
                   
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Cargar Datos</ModalHeader>
                        <ModalBody>
                        <div className="row mt-4">
                        <div className="card">
                            <form 
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
                            </form>
                        </div> 
                    </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.handleSubmit}>Cargar</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
            
                {/* <Tablas db={this.state.datos} onChange={this.actualizar}/> */}
                
            </div>
        );
    }
}

export default Main;