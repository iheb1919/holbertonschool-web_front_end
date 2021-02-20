function changeMode(size,weight,transform,background,color) {
    document.body.style['font-size'] = size;
	document.body.style['font-weight'] = weight;
	document.body.style['text-transform'] = transform;
	document.body.style['background-color'] = background;
	document.body.style['color'] = color;
}
function main() {
    let spooky = function() { changeMode(9, "bold", "uppercase", "pink", "green"); }
	let darkMode = function() { changeMode(12, "bold", "capitalize", "black", "white"); }
	let screamMode = function() { changeMode(12, "normal", "lowercase", "white", "black"); }
	
    let p = document.createElement("P");
    p.innerText = "Welcome Holberton!";
    document.body.appendChild(p);

    let spookyBtn = document.createElement("BUTTON");
    spookyBtn.innerText = "Spooky";
    document.body.appendChild(spookyBtn);
    spookyBtn.addEventListener("click", spooky); 
    
    let darkModeBtn = document.createElement("BUTTON");
    darkModeBtn.innerText = "Dark mode";
    document.body.appendChild(darkModeBtn);
    darkModeBtn.addEventListener("click", darkMode); 

    let screamModeBtn = document.createElement("BUTTON");
    screamModeBtn.innerText = "Scream mode";
    document.body.appendChild(screamModeBtn);
    screamModeBtn.addEventListener("click", screamMode); 
}
main();