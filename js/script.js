import peliculas from './peliculas.js'

/* **** ENUNCIADO ****
Haz que en cada sección aparezca la imagen y el título de la pelicula filtrado por el genero. */

/* La función debe seleccionar la película por género (primer argumento con la clave que identifica 
al género) y llevarla al contenedor correspondiente (el segundo argumento es el contenedor). */

const peliculasPorGenero = (genreId, generoContainerId) => { 
    
    const generoContainer = document.getElementById(generoContainerId); // relaciona al contenedor de la función con el de HTML.
    const peliculasGenero = peliculas.filter(pelicula => pelicula.genre_ids.includes(genreId)); // separa las películas por clave de género.

    peliculasGenero.forEach(pelicula => {
        // se crea el div contenedor de la película
        const divPeli = document.createElement("div");
        divPeli.className = "pelicula";
        
        // se crea el elemento de imagen completando la base de la imagen con el resto (path)
        // se incluye su título como alt y se le da una clase para poder usarla en css.
        const imagen = document.createElement("img");
        imagen.src = "https://image.tmdb.org/t/p/w200" + pelicula.poster_path; 
        imagen.alt = pelicula.title;
        imagen.className = "cartel";

        // se crea el elemento de título con un h4
        const titulo = document.createElement("h4");
        titulo.textContent = pelicula.title;

        // se incluyen tanto la imagen como el título al div de la película
        divPeli.appendChild(imagen);
        divPeli.appendChild(titulo);

        // se añade el div de la película al contenedor de género
        generoContainer.appendChild(divPeli);
    });
};

// Usamos la función para cada uno de los géneros
peliculasPorGenero(28, 'genero-28'); 
peliculasPorGenero(53, 'genero-53'); 
peliculasPorGenero(12, 'genero-12');