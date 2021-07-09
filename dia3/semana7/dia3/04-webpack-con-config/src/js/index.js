const axios = require('axios').default;
import { fecha } from './servicios';

console.log(fecha);

axios.get('https://api.themoviedb.org/3/movie/popular?api_key=40dadce6fd208f0b7a47b1422d4c2d3a&language=es-ES&page=1'
    ).then((rpta)=>{
        console.log(rpta.data);
    });
