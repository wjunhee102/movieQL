import fetch from "node-fetch";
import axios from "axios";

const fs = require("fs");

// const movieData = require("./database/data.json");

const API_URL = "https://yts.am/api/v2/list_movies.json?";

const API_URI = "https://yts.am/api/v2/list_movies.json";

let count = 0;

let getTitle = [];

const getData = async () => {
  
  const { data: {
    data: { movies }
  }} = await axios(API_URI);
  
  count++

  console.log(`실행됨.${count}`)
  return movies;
}

const movieData = getData();

export const getMovies = (limit, rating) => {
  
  let REQUEST_URL = API_URL;
  
  if(limit > 0) {
    REQUEST_URL += `limit=${limit}`;
  }
  if(rating > 0) {
    REQUEST_URL += `&minimum_rating=${rating}`;
  }

  return fetch(REQUEST_URL)
    .then(res => res.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err));
}

export const getById = async (id) => {
  const data = await movieData;
  const movieTitle = data.filter(m => m.id === id)[0].title
  
  getTitle.push(movieTitle)

  console.log(getTitle);
  return data.filter(m => m.id === id);
}
