//tomb
var tomb1 = [];
var tomb2 = [1,2,3,4,5,6];
var tomb3 = [4];

console.log(tomb2.length);
var txt = "";
for (let index = 0; index < tomb2.length; index++) {
    txt+=tomb2[index]+", ";
    
}

console.log(txt)

var gyumi = ["alma", "körte","szilva","eper"];
var gyumsz = ["piros", "sárga","lila","piros"];
var gyumar = [260,300,400,500];

i = 0
while(i < gyumsz.length && !(gyumsz[i]==="sárga")){
    i++;
}
var vane = i < gyumsz.length;
console.log(vane);



//hány piros gyümi van
//mennyi a gyümik összértéke
//piros vagy sárga gyümiből van többű
//vane 1000ft feletti gyümi
//mennyi a piros gyümi összára
// mennyi az átlagos gyümölcs ar
var gyumipi = 0;
for (i = 0; i < gyumsz.length; i++){
    if (gyumsz[i] === "piros"){
        gyumipi++;
    }
}
console.log("piros gyümi szama: "+gyumipi);

var ossz = 0;
for (i = 0; i< gyumar.length;i++){
    ossz += gyumar[i];
}

console.log("összáruk: "+ossz+"ft");

var birosgyumi = 0;
var zsargagyumi = 0;
for (i = 0; i< gyumsz.length;i++){
    if (gyumsz[i] === "piros"){
        birosgyumi++;
    }else if (gyumsz[i] === "sárga"){
        zsargagyumi++;
    }
}

if (zsargagyumi > birosgyumi){
    console.log("Sárgagyümiből van több");
}else if(zsargagyumi < birosgyumi){
    console.log("Pirosból van több");
}

i =0;
while(i<gyumar.length && !(gyumar[i] === 1000)){
    i++;
}

if (i < gyumar.length){
    console.log("Van 1000 ft értékü");
}else{
    console.log("Nincs 1000 ft értékü");
}

var pirososz = 0;
for (i = 0; i < gyumsz.length; i++){
    if (gyumsz[i] === "piros"){
        pirososz += gyumar[i];
    }
}
console.log("piros gyümik ára: "+pirososz+"ft");

var osszege = 0;
for(i = 0; i< gyumar.length;i++){
    osszege+=gyumar[i];
}
console.log("a gyümi átlag ára: "+osszege/gyumar.length+"ft");