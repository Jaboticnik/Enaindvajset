// Predmeti - shranijo podatke v globino - zahtevni tipi podatov

let ucneure = {
    naslov: "Matematika",
    strani: 16,
    dolzina: 1,
    ucitelj: "Jaz",
    nivo: "Zacetnik",
    zastonj: true,
    kljucniki: ["Ulomki", "Enacbe"]

}


console.log(ucneure.kljucniki[0]) // V nekaterih primerih lahko uporabimo tudi ucneure["kljucniki"][0]

let kukuruz = Math.floor(Math.random() * 6.1)
console.log(kukuruz)          // To je samo ponovitev