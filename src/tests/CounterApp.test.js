import React from 'react'
import CounterApp from "../CounterApp";
import { shallow } from 'enzyme';


describe('Pruebas en CounterApp', () => {


    //para que el componente se reinicialice en cada test
    let wrapper = shallow( <CounterApp /> );

    beforeEach( () => {

        wrapper = shallow( <CounterApp /> );
    });



    test('debe de mostrar correctamente <CounterApp />', () => {

        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de mostrar el valor por defecto de 100', () => {
        
        const wrapper = shallow( <CounterApp value={ 100 } /> );
        const counterText = wrapper.find('h2').text().trim(); //trim elimina espacios
        expect( counterText ).toBe( '100' );
    });

    test('debe de incrementar con el botón +1', () => {
        
        wrapper.find('button').at(0).simulate('click'); //busca button en la posicion 1
        const buttonText = wrapper.find('h2').text().trim();
        expect( buttonText).toBe('1')
    });

    test('debe de decrementar con el botón -1', () => {
        
        wrapper.find('button').at(1).simulate('click'); //busca button en la posicion 1
        const buttonText = wrapper.find('h2').text().trim();
        expect( buttonText ).toBe('-1');
    });

    test('debe de colocar el valor por defecto con el btn reset', () => {

        const wrapper = shallow( <CounterApp value={ 0 } /> );
        
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(2).simulate('click');
        const buttonText = wrapper.find('h2').text().trim();
        expect( buttonText ).toBe('0');



    });
    
     
    
    
})
