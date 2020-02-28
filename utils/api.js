const axios = require("axios")

//Cannot contain the value of the information to be used in the generate Markdown section
// returns undefined every time
function getInfo(username){
  const queryUrl = `https://api.github.com/users/${username}`
  axios
    .get(queryUrl)
    .then(function({data}){
      console.log(data);
      return data;
    })
}

module.exports = {
  getInfo: getInfo,
}
