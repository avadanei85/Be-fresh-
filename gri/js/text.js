function func(){

	let type = document.getElementsByName("type");
	if(type[0].checked)
{
	window.open("../colorsJS/rosu/index.html");
}

	else if(type[1].checked)
{
	window.open("../colorsJS/roz/index.html");
}
	else if(type[2].checked)
{
	window.open("../colorsJS/galben/index.html");
}
	else if(type[3].checked)

{
	window.open("../colorsJS/portocaliu/index.html");
}
	else if(type[4].checked)

{
	window.open("../colorsJS/maro/index.html");
}
	else if(type[5].checked)

{
	window.open("../colorsJS/verde/index.html");
}
	else if(type[6].checked)

{
	window.open("../colorsJS/albastru/index.html");
}
	else if(type[7].checked)

{
	window.open("../colorsJS/violet/index.html");
}
	else if(type[8].checked)

{
	window.open("../colorsJS/alb/index.html");
}
	else if(type[9].checked)

{
	window.open("../colorsJS/gri/index.html");
}
	else if(type[10].checked)

{
	window.open("../colorsJS/negru/index.html");
}
	
}


// Se schimba imaginea la div "sus" in functie de anotimp
const currentTime = new Date();

const month = currentTime.getMonth() + 1;
const total = month;

// Primavara
if (total >= 3 && total <= 5)
{
    document.getElementById("sus").style.backgroundImage = "url('../imagini/32.jpg')";
}
// Vara
else if (total >= 6 && total <= 8)
{
    document.getElementById("sus").style.backgroundImage = "url('../imagini/97.jpg')";
}
// Toamna
else if (total >= 9 && total <= 11)
{
    document.getElementById("sus").style.backgroundImage = "url('../imagini/64.jpg')";
}
// Iarna
else if (total == 12 || total <= 2)
{
    document.getElementById("sus").style.backgroundImage = "url('../imagini/99.jpg')";
};
