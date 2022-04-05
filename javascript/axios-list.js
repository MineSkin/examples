/*
 *  npm install axios
 */

const axios = require('axios');

// send the request!
axios.request({
    method: 'GET',
    url: 'https://api.mineskin.org/get/list/0',
}).then(response => {
    // log the result
    console.log(response.data);
})
