import { get, eliminar } from '../util/index.js';

export async function ejercicio4(){
    console.log("--ejecutando ejercicio 4--");

    const usuarios = await get('users');
    const posts = await get('posts');


    usuarios.forEach(async function(usuario){
        
        // Si el usuario esta inactivo
        if(usuario.active == false){
            // mensaje de aviso
            console.log("Limpiando datos de: "+usuario.name);
            const sus_posts = posts.filter(function(p){
                return p.userId == usuario.id;
            });
            sus_posts.forEach(async function(post){
                await eliminar('posts',post.id);
                console.log("Post eliminado con id: "+ post.id);
            });
            await eliminar('users', usuario.id);
            console.log("Usuario "+usuario.name + "Ha sido eliminado");
        }
    });
    console.log("-Proceso de limpieza terminado-");
}

ejercicio4();
