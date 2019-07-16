const axios = require('axios');


const availableDomain = async (params, godaddyKey, godaddySecret, domainName, checkType) => {
  console.log(params);
  var sendParams = {};

  sendParams['headers'] = {
      "Content-Type": 'application/json',
      Authorization: 'sso-key ' + godaddyKey + ':' + godaddySecret + '',
    };

  return axios({
    method: 'get',
    sendParams,
    url: "https://api.ote-godaddy.com/v1/domains/available?domain=" + domainName + "&checkType="+ checkType,
    data: params
  }).then((response) => {
    console.log(response)
  }).catch((error) => {
    console.log(error)
  });;

}


module.exports = { availableDomain }
