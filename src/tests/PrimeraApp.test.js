import React from 'react';
import { shallow } from 'enzyme';

import PrimeraApp from "../PrimeraApp";


describe('Pruebas en PrimeraApp', () => {
    
    test('debe de mostrar <PrimeraApp /> correctamente ', () => {
        

        const saludo = 'Hola, soy Goku';
        const wrapper = shallow( <PrimeraApp saludo={ saludo }/> );

        expect( wrapper ).toMatchSnapshot();
        
    });

    test('debe de mostrar el subtitulo enviado por props ', () => {
        
        const saludo = 'Hola, soy Goku';
        const subTitulo = 'Soy un subtitulo';

        const wrapper = shallow( 
            <PrimeraApp 
                saludo={ saludo } 
                subTitulo={ subTitulo }
            /> 
        );

        const textoParrafo = wrapper.find('p').text();

        expect( textoParrafo ).toBe( subTitulo );
        
    })
    
    
    
}) 
