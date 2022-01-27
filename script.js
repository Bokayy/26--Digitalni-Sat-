"use strict"

const interval = setInterval(function () {})

window.addEventListener("load",calculateTime);

//mozemo sve zamijeniti time da koristimo Date isključivo, te parsiramo iz array-a
function calculateTime(){
    let date = new Date();
    let dan = date.getDay();
    let sat = date.getHours();
    let minute = date.getMinutes();
    let sekunde = date.getSeconds();
    let dani = [
        "Ponedjeljak",
        "Utorak",
        "Srijeda",
        "Četvrtak",
        "Petak",
        "Subota",
        "Nedjelja"
    ]

    document.getElementById("dan").innerHTML = dani[dan-1]; //-1 zbog načina kako englezi pišu
    
/*     function toUpdate(){ */
    document.getElementById("sat").innerHTML = sat;
    document.getElementById("minuta").innerHTML = minute;
    document.getElementById("sekunde").innerHTML = sekunde;
/*     } */
}
//pozovi funkciju svakih 900 milisekundi tj. svakih 0.9 sekundi
setTimeout(calculateTime,900);