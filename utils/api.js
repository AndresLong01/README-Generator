const axios = require("axios")

function getInfo(username){
  const queryUrl = `https://api.github.com/users/${username}`
   return axios
    .get(queryUrl)
    .then(function({data}){
      //Creating an object for my response
      const objData = {
        "username": data.login,
        "name": data.name,
        "picture": data.avatar_url,
        "email": data.email
      }

      return objData;
    })
}

module.exports = {
  getInfo: getInfo,
}
