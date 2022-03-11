/* 
let jedokoncal = false
let zelipotrdilo = true

if (jedokoncal === true || zelipotrdilo === true)  { // Znak && pomeni oboje, || pomeni ali
    ustvaripotrdilo()

}

function ustvaripotrdilo() {
    console.log("Ustvarjanje potrdila....")
}
*/

// Usvari dve neznanki,  ImaRadDokumentarce in ImaRadStrasljivke
// Ce eno od tega drzi, naj priklice predlaganfilm().

let ImaRadDokumentarce = false
ImaRadStrasljivke = true

if (ImaRadDokumentarce === true || ImaRadStrasljivke === true) {
    predlaganfilm()
}

function predlaganfilm() {
    console.log("Poglej si ta film, ki ti bo vsec!")
}
