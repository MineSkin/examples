/*
 *  npm install axios
 */

const fs = require('fs');
const axios = require('axios');

// read the skin file
const file = fs.readFileSync('../my-skin.png');

// send the request!
axios.request({
    method: 'GET',
    url: 'https://api.mineskin.org/get/list/0',
}).then(response => {
    // log the result
    console.log(response.data);
})
