// Importar las herramientas de la base api

import {get,crear,eliminar,actualizar} from './util/index.js';

async function inicializar_proyecto() {
    console.log("El proyecto se ha inicializado correctamente");
    // LLamar la api para probar
    const usuarios = await get('users');
    console.log("Usuarios cargados:",usuarios);
}

inicializar_proyecto();
