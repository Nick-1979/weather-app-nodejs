const request = require('request');
const argv = require('yargs').argv;

let apiKey = '8cbe632326cd26f3cbb1178f7c23befc';
//let city = 'Lahijan,IR';
let city = argv.c || 'Lahijan,IR';

//should put url between `backticks`  not 'single quot'
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

request(url, function (err, response, body) {
    if(err){
        console.log('error:', error);
    } else {
        //console.log('body:', body);
        let weather = JSON.parse(body);
        let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        console.log(message);
    }
});

