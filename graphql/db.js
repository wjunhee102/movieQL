const API_URL = "https://yts.am/api/v2/list_movies.json";



// let movies = [
//   {
//     id: 0,
//     name: "Star Wars - The new one",
//     score: 1
//   },
//   {
//     id: 1,
//     name: "Avangers - The new one",
//     score: 8
//   },
//   {
//     id: 2,
//     name: "The Godfather I",
//     score: 99
//   },
//   {
//     id: 3,
//     name: "Logan",
//     score: 2
//   },
// ];

// export const getMovies = () => movies;

// const setMovies = newMovies => movies = newMovies;


// export const getById = id => {
//   const filteredMovies = movies.filter(movies => movies.id === id)[0];
//   return filteredMovies
// }

// export const deleteMovie = id => {
//   const cleanedMovies = movies.filter(movie => movie.id !== id);
//   if (movies.length > cleanedMovies.length) {
//     setMovies(cleanedMovies);
//     return true;
//   } else {
//     return false;
//   }
// }

// const makeId = (m) => {
//   let newId = m[m.length-1].id + 1
//   const idFilter = id => m.filter(ele => ele.id === id)[0]
//   if(!idFilter(newId)) {
//     return newId
//   } else {
//     return newId + 1
//   }
// }

// export const addMovie = (name, score) => {
//   const newMovie = {
//     id: makeId(movies),
//     name,
//     score
//   }
//   movies.push(newMovie);
//   return newMovie;
// }