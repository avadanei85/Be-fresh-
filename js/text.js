

// Se schimba imaginea la div "sus" in functie de anotimp
const currentTime = new Date();
const month = currentTime.getMonth() + 1;
const total = month;

// Primavara
if (total >= 3 && total <= 5) {
	document.getElementById("sus").style.backgroundImage = "url('imagini/32.jpg')";
}
// Vara
else if (total >= 6 && total <= 8) {
	document.getElementById("sus").style.backgroundImage = "url('imagini/97.jpg')";
}
// Toamna
else if (total >= 9 && total <= 11) {
	document.getElementById("sus").style.backgroundImage = "url('imagini/64.jpg')";
}
// Iarna
else if (total == 12 || total <= 2) {
	document.getElementById("sus").style.backgroundImage = "url('imagini/99.jpg')";
};


// Change div "sus" on click
{
	document.getElementByName("patrat1").addEventListener("click", change1);
}
function change1() {
	let image = document.getElementById("sus").style.backgroundImage = "url('imagini/95.jpg')";;

}
{
	document.getElementByName("patrat2").addEventListener("click", change2);
}
function change2() {
	let image = document.getElementById("sus").style.backgroundImage = "url('imagini/85.jpg')";;

}
{
	document.getElementByName("patrat3").addEventListener("click", change3);
}
function change3() {
	let image = document.getElementById("sus").style.backgroundImage = "url('imagini/35.jpg')";;

}
{
	document.getElementByName("patrat4").addEventListener("click", change4);
}
function change4() {
	let image = document.getElementById("sus").style.backgroundImage = "url('imagini/65.jpg')";;

}
