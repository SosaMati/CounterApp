import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("Prueba en 05-funciones", () => {

    test("getUser debe de retornar un objeto", () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect( user ).toEqual( userTest );
        //no se puede usar toBe porque compara que dos objetos sean iguales, pero los objetos apuntan a una memoria diferente lo que lo hacen diferentes asi que se usa el toEqual para la comparacion de la
    })


    test("getUsuarioActivo debe de retornar un objeto", () => {

        const nombre = 'Matías'

        const userActivoTest = {
            uid: 'ABC567',
            username: nombre
        }

        const userActivo = getUsuarioActivo ( nombre );

        expect( userActivo ).toEqual( userActivoTest );


    })
})