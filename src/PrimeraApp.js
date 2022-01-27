// import React, { Fragment } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

//Componente se escibre con UpperCameCase
// Function component

const PrimeraApp = ( { saludo/*= "Hola Mundo"*/, subtitulo } ) => { //usamos una props, destructuramos la props saludo que viene del index, si la props no existe se toma el valor por defecto "Hola mundo"
    
    // const saludo = 'Hola Mundo';
    
    //El return solo retorna un elemento en la misma linea por eso agregamos () y enviamos todo junto en un mismo fragmento
    return (

        //importando fragment:
        // <Fragment>
        //     <h1>Hola Mundo!</h1>
        //     <p>Mi primera aplicación</p>
        // </Fragment>
         
        //Sin la necesidad de importar fragment:
           <>
               <h1> { saludo } </h1>
               <p> { subtitulo } </p>
           </>
    );
}



//Requerimos que el props sea de tipo string y es requerido
PrimeraApp.propTypes = {

    saludo: PropTypes.string.isRequired

}


//Otra forma de escribir default props
PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;
