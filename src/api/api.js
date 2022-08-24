const API_KEY = "49f2de12-9358-4b06-9309-42a88fe96732";

export const getMatchesInfo = () => {
    const url = `https://api.cricapi.com/v1/currentMatches/${API_KEY}`
    return fetch(url);
}