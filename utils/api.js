const axios = require("axios")

function getInfo(username){
  const queryUrl = `https://api.github.com/users/${username}`
  axios
    .get(queryUrl)
    .then(function({data}){
      console.log(data);
      const objData = data;
      return objData;
    })
}

module.exports = {
  getInfo: getInfo
}
