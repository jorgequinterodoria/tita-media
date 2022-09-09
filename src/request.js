const API_KEY = '63191962b021bd6318c63093'

export default {
    API_KEY: '63191962b021bd6318c63093',
    fullUser: `/user/${API_KEY}`,
    userPost: `/user/${API_KEY}/post?limit=10`,
    posts: `/user/post?limit=10`,
    commentList: `/user/${API_KEY}/comment?limit=10`,
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=es-ES`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=es-ES`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=es-ES`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=es-ES`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=es-ES`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=es-ES`,
    fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648&language=es-ES`,
    fetchSciFi: `/discover/movie?api_key=${API_KEY}&with_genres=878&language=es-ES`,
    fetchWestern: `/discover/movie?api_key=${API_KEY}&with_genres=37&language=es-ES`,
    fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16&language=es-ES`,
    fetchTV: `/discover/movie?api_key=${API_KEY}&with_genres=10770&language=es-ES`,
}