function createElement(data) {
    let p = document.createElement("P");
    let pr = document.createTextNode(data)
    p.appendChild(pr);
    document.body.appendChild(p);
}
function queryWikipedia(callback) {
	let xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*", true);

	xhttp.onload = function() {
        
		if (xhttp.readyState == 4) {

			response = JSON.parse(xhttp.responseText);
			callback(response.query.pages["21721040"].extract)
		}
	}
	xhttp.send();
}

queryWikipedia(createElement);
