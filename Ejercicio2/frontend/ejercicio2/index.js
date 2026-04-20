// importar la herramienta de consulta
import {get} from '../util/index.js';

export async function ejercicio2(){
    console.log("--Ejecutando punto 2--")

    // Se piden los datos al servidor
    const posts = await get('posts');
    const comentarios = await get('comments');

    // Crear una lista con lo resultados
    let reporte_comentarios = [];

    posts.forEach(function(post){
        const su_publicacion = comentarios.filter(function(comentario){
            return comentario.postId === post.id;
        });

        // Nuevos resultados en reporte_comentarios
        reporte_comentarios.push({
            titulo_post:post.title,
            comentarios: su_publicacion.length == 0 ? "sin comentarios": "con comentarios",
            total_comentarios: su_publicacion.length
        })
    })

    console.table(reporte_comentarios);
}

ejercicio2()
