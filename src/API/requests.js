const API_KEY = "3005d94c9609dfff31bb87e2643367b4";

const requests = {
   // === Movies url ===
    getUpcomingMovies: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    getTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    getPopularMovies: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    //getSimilarMovies
    //getRecommendations
    //getDetailMovie

    // === Tv series ===
    /*
    getLatestTvSeries
    getPopularTvSeries
    getTopRatedTvSeries
    getRecommendationTvSeries
    getDetailTvSerie
    get
    */


}

export default requests;

