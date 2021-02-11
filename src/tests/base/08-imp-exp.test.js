import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de Heroes', ()=>{

    test('Debe de retornar un héroe por id', ()=>{

        const id = 1;
        const heroe = getHeroeById(id);
        
        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);
    })

    test('Debe de retornar undefined si Heroe no existe', ()=>{

        const id = 10;
        const heroe = getHeroeById(id);
        
        expect(heroe).toBe(undefined);
    })

    //debe retornar un arreglo con los heroes de DC
    //owner
    //toEqual al arreglo filtrado
    test('debe retornar un arreglo con los heroes de DC', ()=>{

        const owner = 'DC';
        const heroe = getHeroesByOwner(owner);
        
        const heroeData = heroes.filter(h => h.owner === owner);

        expect(heroe).toEqual(heroeData);
    })

    //debe retornar un arreglo con los heroes de Marvel
    //lenght = 2 
    //toBe
    test('debe retornar un arreglo con los heroes de Marvel', ()=>{

        const owner = 'Marvel';
        const heroe = getHeroesByOwner(owner);
        
        expect(heroe.length).toBe(2);
    })
})