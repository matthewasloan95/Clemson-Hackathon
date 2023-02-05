window.onload = function() {
    
    fetch('https://api.example.com/data', {
    headers: {
        'Accept': 'text/plain',
        'User-Agent': 'YourCustomUserAgent'
    }
    })
    .then(response => response.text())
    .then(data => document.getElementById(infoBro).innerHTML = data.toString())
    .catch(error => console.error(error));


}
