
let igralas = {
    ime: "Tocke: ",
    tocke: 0
}

let vsekarte = [] 

let skupek = 0

let imaenaindvajset = false

let jevigri = false

let sporocilo = ""



let SporociloHTML = document.getElementById("sporocilo-html")

let SkupekHTML = document.querySelector("#skupek-html")  
let KartaginaHTML = document.getElementById("kartagina-html")


let TockeHTML = document.getElementById("tocke-el")

function Posodobitocke() {
    TockeHTML.textContent = igralas.ime + igralas.tocke
}

let SporocilojtockeHTML = document.getElementById("plustocke-el")
let SporocilotockeHTML = document.getElementById("minustocke-el")
function Sporocilominustocke() {
SporocilojtockeHTML.textContent = ""
  SporocilotockeHTML.textContent = "- 5 TOCK"
}


function Sporociloplustocke() {
    SporocilotockeHTML.textContent = ""
    SporocilojtockeHTML.textContent = "+ 10 TOCK"
}



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
    } else if (skupek > 21) {      
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

    
    SporociloHTML.textContent = sporocilo
    console.log(sporocilo)

}



function NovaKarta() {
    
    if (jevigri === true && imaenaindvajset === false) {
    
    let tretjakarta = nakljucnakarta()
    
    
    skupek += tretjakarta

    

    vsekarte.push(tretjakarta)
    console.log(vsekarte)
    
   
    posodobiigro()
    } else {
        SporociloHTML.textContent = "Ne mores dodati nove karte!"
    }
}


