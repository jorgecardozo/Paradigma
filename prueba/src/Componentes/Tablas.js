import React, { Component } from 'react';
import { Table ,Button} from 'reactstrap';
import axios from 'axios';


class Tablas extends Component{
    constructor(props){
        super(props);
        this.state = {
            modal: false
          };
    }

    eliminar  = (e) =>{


        console.log("This:",this)
   
        axios.delete('http://10.0.0.68:81/personas/'+e)
            .then( (response)=> {
                // handle success
                console.log(response);

                console.log("Entro al eliminar");
                console.log(this.props.onChange);
                
                if(this.props.onChange)
                    this.props.onChange();
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    toggle= ()=> {
        this.setState({
          modal: !this.state.modal
        });
        //this.handleSubmit();
      }
    
    render(){
        return(
            
            <div>
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
                    {   this.props.db.map((persona, i) => 
                         <tr key={i}>
                            <th scope="row">{persona.id}</th>
                            <td>{persona.nombre}</td>
                            <td>{persona.apellido}</td>
                            <td>{persona.tipoDocumento}</td>
                            <td>{persona.documento}</td>
                            <td>{persona.email}</td>
                            <td> <Button color="danger" onClick={()=>this.eliminar(persona.id)}>Eliminar</Button> </td>
                            <td> <Button color="danger" onClick={()=>this.eliminar(persona.id)}>Atualizar</Button> </td>


                         </tr>
                        )}
                   
                  
                </tbody>
            </Table>
            </div>
        );
    }
        
    
}

export default Tablas;