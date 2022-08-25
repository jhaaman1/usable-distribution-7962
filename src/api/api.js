const API_KEY = "49f2de12-9358-4b06-9309-42a88fe96732";
const NEWS_API_KEY = 'dd1b525e290741b8b413c2fb66346d5b';

export const  getMatchesInfo = async () => {
    const url = `https://api.cricapi.com/v1/currentMatches?apikey=49f2de12-9358-4b06-9309-42a88fe96732&offset=0`
    // return await fetch(url);
}

export const getNewsInfo = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${NEWS_API_KEY}`
    return await fetch(url);
}


const axios = require("axios");

 const options = {
  method: 'GET',
  url: 'https://cricbuzz-cricket.p.rapidapi.com/news/v1/topics/349',
  headers: {
    'X-RapidAPI-Key': '369e8a1e45msh8dcba889d30c4a7p1cd380jsnbdebbfbcce37',
    'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
  }
};

export const getNewsData =() =>{
    return axios.request(options)
} 