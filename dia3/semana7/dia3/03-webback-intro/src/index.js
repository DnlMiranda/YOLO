const axios = require ('axios').default;

axios
.get('https://api.themoviedb.org/3/movie/popular?api_key=40dadce6fd208f0b7a47b1422d4c2d3a&language=es-ES&page=1')
.then((rpta)=>{
    console.log(rpta.data);
});

const saludar = () => {
    console.log('Saludando gentita');
}

saludar();