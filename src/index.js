import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';
import PrimeraApp from './PrimeraApp';
import './index.css';

//const saludo = <h1>Hola Mundo</h1>;

const divRoot = document.querySelector('#app');

//console.log(divRoot);
//ReactDOM.render( <PrimeraApp saludo="Hola soy Goku" /> , divRoot);
ReactDOM.render( <CounterApp  /> , divRoot);