// Vaja za true ali false
// console.log(4 === 3)  // false
// console.log(5 > 2)    // true
// console.log(12 > 12)  // false
// console.log(3 < 0)    // false
// console.log(3 >= 3)   // true
// console.log(11 <= 11) // true
// console.log(3 <= 2)   // false
//------------------------------------

// Ustvari predmet igralas, ki mu dodaj ime ter tocke
let igralas = {
    ime: "Tocke: ",
    tocke: 0
}

// 1. Ustvari dve neznanki prvakarta in drugakarta.
// Nastavi ju na nakljucno stevilo med 2 in 11

let vsekarte = [] //Vrstni red
// 2. Ustvari neznanko skupek, ki naj bo seštevek prve in druge karte.

let skupek = 0

let imaenaindvajset = false

// Ustvari neznanko je se v igri (torej nima stevila > od 21)
let jevigri = false

// Ustvari neznanko imenovano sporocilo, ki je praznen "string"
let sporocilo = ""


// shrani sporocilo v besedilo v htmlju z idjem sporocilo-html

let SporociloHTML = document.getElementById("sporocilo-html")

// shrani vsoto v besedilo v htmlju z idjem skupek-html
let SkupekHTML = document.querySelector("#skupek-html")  //Zamenjali smo GetElementById z querySelector. Uporablja se za sirse predmete v htmlju. Zato smo dali #, ker # pomeni id enako kot v css. Torej ce bi hoteli izbrati class bi dali prej "." (piko). 

// shrani sporocilo kart v htmlju z idjem kartagina-html
let KartaginaHTML = document.getElementById("kartagina-html")


// shrani tocke v htmlju z idjem tocke-el
let TockeHTML = document.getElementById("tocke-el")

// Prikazi ime in tocke iz predmeta igralas v TockeHTML
function Posodobitocke() {
    TockeHTML.textContent = igralas.ime + igralas.tocke
}

// Funkcija izguba tock
let SporocilojtockeHTML = document.getElementById("plustocke-el")
let SporocilotockeHTML = document.getElementById("minustocke-el")
function Sporocilominustocke() {
SporocilojtockeHTML.textContent = ""
  SporocilotockeHTML.textContent = "- 5 TOCK"
}

// Funkcija pridobitev tock
function Sporociloplustocke() {
    SporocilotockeHTML.textContent = ""
    SporocilojtockeHTML.textContent = "+ 10 TOCK"
}


// Ustvari funkcijo nakljucna karta, ki ustvari nakljucno stevilo med 1 in 13 
function nakljucnakarta() {   
    let nakljucnostevilo = Math.floor( Math.random() * 13) + 1
    if (nakljucnostevilo === 1) {
        nakljucnostevilo = 11
    } else if (nakljucnostevilo >= 11) {
        nakljucnostevilo = 10
    } else {
        return nakljucnostevilo
    }
    return nakljucnostevilo
}


// Ustvari funkcijo zacniigro() 

function zacniigro() {
    jevigri = true
    imaenaindvajset = false
    let prvakarta = nakljucnakarta()
    let drugakarta = nakljucnakarta()
    vsekarte = [prvakarta, drugakarta]
    skupek = prvakarta + drugakarta
    SporocilotockeHTML.textContent = ""
    SporocilojtockeHTML.textContent = ""  
    posodobiigro()
    Posodobitocke()
}



function posodobiigro() {
    SkupekHTML.textContent =  "Skupek: " + " " + skupek
    // Prikazi karte z formatom --> "Karte: 10 + 4"


    // Ustvari ponovitev, ki prikaze vse karte, ne samo 2
    KartaginaHTML.textContent = "Karte: "
    for (i = 0; i < vsekarte.length; i++) {
        KartaginaHTML.textContent += vsekarte[i] + " + "
    }



    if (skupek < 21) {
        sporocilo = "Zelis izbrati novo karto?"
    } else if (skupek === 21) {
        sporocilo = "Zmagal si!"
        imaenaindvajset = true
        igralas.tocke += 10
        Posodobitocke()
        Sporociloplustocke()
    } else if (skupek > 21) {      //Tega ne bi rabil napisat z else if ampak sam z else brez vsega, ker sem zgoraj navedel prejsnje mozne nacine, in ce niso, je edini mozen ta.
        sporocilo = "Zgubil si!"
        jevigri = false
        if (igralas.tocke > 5) {
          igralas.tocke -= 5
        } else {
          igralas.tocke = 0
        }
        Posodobitocke()
        Sporocilominustocke()
        
    }

    // Prikazi rezultat
    SporociloHTML.textContent = sporocilo
    console.log(sporocilo)

}


// Ustvari funkicjo NovaKarta()
function NovaKarta() {
    // Dovoli novo karto samo, ce je igralec se v igri (nima vec kot 21) in nima imaenaindvajset.
    if (jevigri === true && imaenaindvajset === false) {
    // 1. Ustvari neznanko imenovano tretjakarta (2-11)
    let tretjakarta = nakljucnakarta()
    
    // 2. Karto pristej v skupek
    skupek += tretjakarta

    //4. Vstavi novo karto v niz vsekarte

    vsekarte.push(tretjakarta)
    console.log(vsekarte)
    
    // 3. Poklici zacniigro()
    posodobiigro()
    } else {
        SporociloHTML.textContent = "Ne mores dodati nove karte!"
    }
}


