function volume_sphere() {
    //Write your code here
	event.preventDefault();
	let radius = document.querySelector("#radius").value;
	let volume = (4/3) *  Math.PI * Math.pow(radius, 3);
	volume = volume.toFixed(4);
	document.querySelector("#volume").value = volume;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
