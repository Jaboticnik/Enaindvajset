let poved = ["Zdravo,", "moje", "ime", "je", "Pro"] 


// Prikazi niz pozdrav v HTMLJU z idjem pozdrav-el z uporabo PONOVITVE in .textContent-a

let PozdravHTML = document.getElementById("pozdrav-el")

for (let i = 0; i < poved.length; i++) {
    PozdravHTML.textContent += poved[i] + " " 
}
