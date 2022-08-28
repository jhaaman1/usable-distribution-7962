// import axios from "axios";

const API_KEY = "49f2de12-9358-4b06-9309-42a88fe96732";
// const API_KEY = "0c064f33-562b-4d36-898e-f3cac24dd2d2";
const NEWS_API_KEY = "dd1b525e290741b8b413c2fb66346d5b";

export const getMatchesInfo = async () => {
  const url = `https://api.cricapi.com/v1/currentMatches?apikey=${API_KEY}&offset=0`;
  return await fetch(url);
};

export const getCricketScore = (id) => {
  const url = `https://api.cricapi.com/v1/cricScore?apikey=${API_KEY}&unique_id=${id}`;
  return fetch(url);
};

export const getNewsInfo = async () => {
  const url = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${NEWS_API_KEY}`;
  return await fetch(url);
};

export const playerSearch = (unique_id) => {
  const url = `https://api.cricapi.com/v1/players_info?apikey=${API_KEY}&id=40f84e49-f34f-455d-a2c7-8552580521dd`;
  return fetch(url);
};

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '369e8a1e45msh8dcba889d30c4a7p1cd380jsnbdebbfbcce37',
		'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
	}
};

export const getPlayerInfo = async (id) => {
  console.log(id)
  let arr=[];
  for(let i=6000;i<=6100;i++){
    let res = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/${i}`, options)
    res = await res.json()
    arr.push(res);
  }
console.log(arr);
  // try{
  //   let res = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/${id}`, options)
  //   res = await res.json()
  //   console.log(res);
  // }catch(err) {
  //   console.log(err)
  // } 
}


// .then((response) => {
//   response.json()
//   console.log(response)
// })
// .catch(err => console.error(err));