const APIKEY = '517583bde1725d1323361b02619ab08a';

const requests = {
    fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
    fetchAnimationMovies: `/discover/movie?api_key=${APIKEY}&with_genres=16`,
    fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
    fetchSciFiMovies: `/discover/movie?api_key=${APIKEY}&with_genres=878`,
    fetchRomanceMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
}

export default requests;