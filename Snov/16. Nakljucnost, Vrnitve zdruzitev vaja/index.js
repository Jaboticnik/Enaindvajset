// Spremeni, da bo prikazalo od 1 do 6


// Ustvari funkcijo, ki vrne stevilo od 1 do 6

function bakljucnostevilo() {
 let nakljucnostevilo = Math.floor( Math.random() * 6 ) + 1
 return nakljucnostevilo
}

console.log( bakljucnostevilo())