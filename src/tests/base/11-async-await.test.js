import { getImagen } from "../../base/11-async-await"

describe('Pruebas con async-await y Fecth', ()=>{

    test('debe de retornar el url de la imagen', async()=>{

        const url = await getImagen();
    })
})