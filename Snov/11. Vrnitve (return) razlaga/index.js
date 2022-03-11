
 let casigralca1 = 102
 let casigralca2 = 102


 function NajhitrejsiCas() {
     if(casigralca1 < casigralca2) {
       return casigralca1
     } else if (casigralca1 > casigralca2) {
         return casigralca2
     } else {
         return casigralca1
     }
 }


// let hitrejsicas = NajhitrejsiCas()
// console.log(hitrejsicas)


// Ustvari funkcijo, ki vrne skupni cas

function Skupnicas() {
    return casigralca1 + casigralca2
}

// Priklici funkcijo in shrani vrnjeno vrednost v novo spremenljivko

let SKUPNICAS = Skupnicas()

// Prikazi ustvarjeno spremenljivko v konzoli
console.log(SKUPNICAS)