import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom'

//Componentes
import Home from './Componentes/Home';
import Main from './Componentes/Main';
import Tarea from './Componentes/Tarea';

const AppRoutes = ()=>
    
        <Switch>
            <Route path="/Home" component={Home}/>
            <Route path="/Main" component={Main}/>
            <Route path="/Tareas" component={Tarea}/>
        </Switch>

export default AppRoutes; 