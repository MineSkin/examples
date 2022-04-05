/*
 *  npm install axios
 *  npm install form-data // for file uploads
 */

const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');

// read the skin file
const file = fs.readFileSync('my-skin.png');

// construct the body
const body = new FormData();
body.append('file', file, {
    filename: 'skin.png',
    contentType: 'image/png'
});

// send the request!
axios.request({
    method: 'POST',
    url: 'https://api.mineskin.org/generate/upload',
    headers: body.getHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
    }),
    data: body
}).then(response => {
    // log the result
    console.log(response.data);
})
