import 'whatwg-fetch';

class TheMovieDB {
  constructor() {
    this.TDMP_KEY = '0296d413e78fbfaf690c44b8cacef52d';
  }
  getRecentMovies() {
    let recentMoviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${this.TDMP_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

    return new Promise((resolve, reject) => {
      fetch(recentMoviesUrl).then(function(response) {
        return response.json();
      }).then(function(json) {
        resolve(json.results);
      }).catch(function(err) {
        reject(err);
      });
    });


  }

  getUpcomingMovies() {
    let upcomingMoviesUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${this.TDMP_KEY}&language=en-US&page=1`;

    return new Promise((resolve, reject) => {
      fetch(upcomingMoviesUrl).then(function(response) {
        return response.json();
      }).then(function(json) {
        resolve(json.results);
      }).catch(function(err) {
        reject(err);
      });
    });
  }

  getImages(posterpath) {
    return `https://image.tmdb.org/t/p/w154${posterpath}`;
  }
}

export default new TheMovieDB();
