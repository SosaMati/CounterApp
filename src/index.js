import React from "react";
import ReactDOM from "react-dom";
// import PrimeraApp from "./PrimeraApp";
import CounterApp from "./CounterApp";
import './index.css';




const divRoot = document.querySelector('#app'); //seleccionamos donde 

//ReactDOM.render( <PrimeraApp saludo= "Hola, soy Goku" />, divRoot ); // que en donde 

ReactDOM.render( <CounterApp />, divRoot );