import axios from 'axios';

axios.get('https://api.themoviedb.org/3/movie/popular?api_key=40dadce6fd208f0b7a47b1422d4c2d3a&language=es-ES&page=1'
).then(({ data }) => {
    console.log(data);
});

alert('asdsa');