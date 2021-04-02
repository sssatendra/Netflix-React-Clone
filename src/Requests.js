// Typically we would store in {process.env.API_KEY}

const API_KEY ="YOUR API KEY FROM TMDB";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&page=1`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_geners=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_geners=27`,
    fetchRomanceMovie: `/discover/movie?api_key=${API_KEY}&with_geners=10749`,
    fetchDocumentries: `/discover/movie?api_key=${API_KEY}&with_geners=99`
};

export default requests;

