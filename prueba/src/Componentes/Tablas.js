import React, { Component } from 'react';
import { Table} from 'reactstrap';



class Tablas extends Component{
    constructor(){
        super();
        
    }


    
    render(){
        return(
            
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
                <tbody>
                    {console.log("dentro de la tabla")}
                    {console.log(this.props.db)}
                    {   this.props.db.map(persona => 
                         <tr>
                            <th scope="row">1</th>
                            <td>{persona.nombre}</td>
                            <td>{persona.apellido}</td>
                            <td>{persona.Documento}</td>
                            <td>dd</td>
                            <td>dd</td>
                         </tr>
                        )}
                   
                  
                </tbody>
      </Table>
        );
    }
        
    
}

export default Tablas;