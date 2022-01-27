//npm run test 


describe('Pruebas en el archivo demo.test.js', () => {

    test('deben ser iguales los string', () => {
    
        //1. inicialización
        const message = 'Hola Mundo';

        //2. estimulo
        const message2 = "Hola Mundo";

        //3. observar comportamiento
        expect(message).toBe (message2);
    })
});




