const fetch = require('node-fetch');

const BearerToken = "BEARER eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6bnVsbH0.eyJyb2xlIjpbIldFQiBERVZFTE9QRVIiLDE0XSwidW5pcXVlX25hbWUiOiJHUklGRklOLCBDSFJJU1RPUEhFUiBTIiwiZW1haWwiOiJjZ3JpZmZpbkBhdWJ1cm5hbGFiYW1hLm9yZyIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL21vYmlsZXBob25lIjoiMzM0NTAxNzIwOSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdXNlcmRhdGEiOiJodHRwczovL3N0YXRpYy5hdWJ1cm5hbGFiYW1hLm9yZy9tZWRpYS9hcHBzL29yZ2FuaXphdGlvbi8zMDc0IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvdXJpIjoiaHR0cHM6Ly9zdGF0aWMuYXVidXJuYWxhYmFtYS5vcmcvbWVkaWEvYXBwcy9vcmdhbml6YXRpb24vZW1wbG95ZWVwaG90by8wNzYxNC5qcGciLCJpc3MiOiJDT0EtQVBJIiwiZXhwIjoxNDUwMjk2NTIwfQ.cWJWXpTM_gFgTPR4kz9BpJFcCNL0smKuRiRaKlKPnC3r7pvci6lDPlV3x10_kGwefmZT28z_dvsv4jXqhpp6fGFJXm8SVzbhY1EJsw_B6MRM9QsDauTOylXezkn-eUzyD5JIhqZ2-5o14h2EMG8a6LF8eErQr0enUalVKwqutk69BwwRuN9bafwMAHw92Bi0EW2rEiz5YwkndWrV_7944JesGWD4dstWph3RrH-uLWGN0TotFdSZqMQ-jp17ypS8YKTr8TaHAsAlVTf_OXd7FWc7rLUdP9r7ZomQAyeZV1YjB2PI8E6QKCOg3RajhFBmQBzxM9RbAVQ7Id7MoPchLg";

// Need to use only 'current' press releases for the real thing
// Need to make this work for multiple front pages and lists
// Need to make this where it can be executed from the web (like my-press-release)
fetch('https://api2.auburnalabama.org/pressrelease/join/list/3/active')
    .then((res) => res.json())
    .then((articles)=> {
        console.log(articles);
    });

fetch('https://api.auburnalabama.org/cms/sitepage/9/region', { headers: { 'Authorization': BearerToken } })
    .then((res) => res.json())
    .then((regions) => {
        console.log(regions);
        // From here we just need to grab the 'landing-news-template' region, merge with the articles, use result to replace the 'landing-news' region, and then post all the regions back to /cms/sitepage/9/regions which will update the site
        // You know what, we could just do that all from the app
        debugger;
    });

fetch('https://api.auburnalabama.org/cms/pagetype/1', { headers: { 'Authorization': BearerToken } })
    .then((res) => res.json())
    .then((template) => {
        console.log(template);
    });

fetch('https://api.auburnalabama.org/cms/site/1/regions', { headers: { 'Authorization': BearerToken } })
    .then((res) => res.json())
    .then((siteRegions) => {
        console.log(siteRegions);
    });
