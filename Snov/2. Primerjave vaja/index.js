// Preveri, ce oseba izpolnjuje pogoje za prejem pisma od kralja (mora biti stara tocno 100 let)

let starost = 100

// ce je manj kot    -> "Nisi se dovolj star!"
// Ce je  -> "Cestitke, izpolnjujes pogoje za kraljevo cestitko!"
//ce je starejsa od 100-> "Prevlka staresina (geron - starec -> geronija - svet starcev) si ze!"

if (starost < 100) {
    console.log("Nisi se dovolj star!")
}
else if (starost === 100) { //Tri === pomenijo da more bit tocno to, torej ker je stevilo 100, ne more bit string 100, torej "100" lah bi napisali z dvema == sam pol bi delalo tut "100"

    console.log("Cestitke, izpolnjujes pogoje za kraljevo cestitko!")
}
else {
    console.log("Prevlka staresina (geron - starec -> geronija - svet starcev) si ze!")
}