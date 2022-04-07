/*
 *  npm install axios
 */

const axios = require('axios');

const PAGE = 1;

// send the request!
axios.request({
    method: 'GET',
    url: 'https://api.mineskin.org/get/list/' + PAGE,
}).then(response => {
    // log the result
    console.log(response.data);
})
