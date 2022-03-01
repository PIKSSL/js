//js változói: var, let, const

var szoveg = "Hazugság!";
console.log(szoveg);
var a = 2;
var b = 3;
var osszeg = a+b;
console.log(osszeg);

if (a == 2) {
    console.log("Az a értéke 2");
    console.log(typeof a);
}else{
    console.log("Az a értéke nem kettő");
    console.log(typeof a);
}

var logikai = true;
logikai = a < 2;
console.log(logikai);

var su= "red";
switch(su){
    case red:
        console.log("piros");

        break;
    case blue:
        console.log("zöld");
        break;
    default:
        console.log("dikh ez milyen szinü");
}

if (su === "red"){
    console.log("pirozss")
}else if (su === "green"){
    console.log("zőőd")
}else if (su === "blue"){
    console.log("Kég")
}else{
    console.log("Hát ez mi? Ez nem is szín moo")
}