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
