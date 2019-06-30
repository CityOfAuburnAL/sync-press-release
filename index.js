const fetch = require('node-fetch');

// Need to use only 'current' press releases for the real thing
// Need to make this work for multiple front pages and lists
// Need to make this where it can be executed from the web (like my-press-release)
fetch('https://api2.auburnalabama.org/pressrelease/join/list/3/active')
    .then((res) => res.json())
    .then((articles)=> {
        console.log(articles);
    });

fetch('https://api.auburnalabama.org/cms/sitepage/9/region')
    .then((res) => res.json())
    .then((regions) => {
        console.log(regions);
    });
