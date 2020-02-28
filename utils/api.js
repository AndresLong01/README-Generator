const axios = require("axios")

function getInfo(username){
  const queryUrl = `https://api.github.com/users/${username}`
  axios
    .get(queryUrl)
    .then(function({data}){
      console.log(data);
      const apiData = data
      return apiData;
    })
}

module.exports = {
  getInfo: getInfo,
}
