import { retornaArreglo } from "../../base/07-deses-arr"

describe('Pruebas en desestructuración', ()=>{

    test('Debe de retornar un string y un número',()=>{
        const [letras, numeros] = retornaArreglo();

        //expect(arr).toEqual(['ABC', 123]);
        expect(letras).toBe('ABC');
        expect(numeros).toBe(123);
    })
})