const board = document.getElementById("pixel-board");
const color = document.getElementsByClassName("color");
const pixels = document.querySelectorAll(".pixel");

function random(numero) {
	return Math.floor(Math.random() * (numero + 1));
}

const cor3 = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
const cor2 = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
const cor1 = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";

function paintPixel(event) {
	const cor = document.querySelector(".selected").style.backgroundColor;
	event.target.style.backgroundColor = cor;
}

function voltaCor(event) {
	event.target.style.backgroundColor = "white";
}
for (let i = 0; i < 36; i += 1) {
	const pixel = document.createElement("div");
	pixel.style.width = "40px";
	pixel.style.height = "40px";
	pixel.classList.add("pixel");
	pixel.style.border = "1px solid black";
	pixel.style.backgroundColor = "white";
	pixel.addEventListener("click", paintPixel);
	pixel.addEventListener("dblclick", voltaCor);
	board.append(pixel);
}

color[0].style.backgroundColor = "black";
color[1].style.backgroundColor = cor1;
color[2].style.backgroundColor = cor2;
color[3].style.backgroundColor = cor3;

function selectColor(event) {
	const elementoSelected = document.querySelector(".selected");
	elementoSelected.classList.remove("selected");
	console.log(event.target.classList.add("selected"));
	console.log(event.target.style.backgroundColor);
}
color[0].addEventListener("click", selectColor);
color[1].addEventListener("click", selectColor);
color[2].addEventListener("click", selectColor);
color[3].addEventListener("click", selectColor);

const button = document.getElementById("clear-board");

function cleanBoard() {
	const pixel = document.querySelectorAll(".pixel");
	for (let i = 0; i < pixel.length; i += 1) {
		pixel[i].style.backgroundColor = "white";
	}
}

button.addEventListener("click", cleanBoard);

// const buttonVqv = document.getElementById('generate-board');

// buttonVqv.addEventListener('click', function () {
//   if (input === '') {
//     alert('Board inválido!');
//   }
// });
