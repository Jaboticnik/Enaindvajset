//Posiljanje vsakega sporocila posebej

let sporocila = [
    "Kako si?",        
    "Odlicno, hvala! Kako ste pa vi?",
    "Odlicno, delam cele dni..",
    "Enako :)"
]

// TO NI VREDU :
// console.log(sporocila[0])
// console.log(sporocila[1])
// console.log(sporocila[2])
// console.log(sporocila[3])


for (let i = 0; i < sporocila.length; i += 1) { // Ustvari funkcijo, da se nizi zacnejo z nulo, koncajo pri kolk je sporocil (torej zajema vsa sporocila znotraj niza sporocila) in na koncu je interval (ce bi dali 2, bi dalo vsako 2)
    console.log(sporocila[i])
}