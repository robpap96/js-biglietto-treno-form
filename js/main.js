"use strict";

// prendo il nome dall'input text
let customerName = document.getElementById("validationDefault01").value;

// prendo i km dall'input text
const km = document.getElementById("validationDefault02").value;

// prendo l'età dall'input text
let customerAge = document.getElementById("age").value;

//aggiungo il listener al click di "genera"
const generatorButton = document.getElementById("genera-btn");
generatorButton.addEventListener('click', function(){
    
    // if( !isNaN(km) || km <= 0 || km > 3000) {
    //     alert("Il valore deve essere numerico, e comrpeso tra 1 e 3000!");
    //     window.location.reload();
    // }
    // if( isNaN(customerName) ) {
    //     alert("Il valore deve essere numerico, e comrpeso tra 1 e 3000!");
    //     window.location.reload();
    // }

    //aggiungo il nome del passeggero
    document.getElementById("ticket-name").innerHTML = customerName;

    //calcolo il costo del biglietto 
    const tariffaPerKm = 0.21;
    if ( customerAge === "Maggiorenne" ) {
    const costoBiglietto = (km * tariffaPerKm).toFixed(2);
    let tipoOfferta = "Biglietto Standard";
    document.getElementById("tipo-offerta").innerHTML = tipoOfferta;
    document.getElementById("prezzo-biglietto").innerHTML = costoBiglietto;

    } 
    if ( customerAge === "Minorenne" ) {
        const costoBiglietto = ((km * tariffaPerKm) - ( (km * tariffaPerKm * 20) / 100)).toFixed(2);
        let tipoOfferta = "Biglietto Ridotto";
        document.getElementById("tipo-offerta").innerHTML = tipoOfferta;
        document.getElementById("prezzo-biglietto").innerHTML = costoBiglietto;

    } 
    if ( customerAge === "Anziano" ) {
        const costoBiglietto = ((km * tariffaPerKm) - ( (km * tariffaPerKm * 40) / 100)).toFixed(2);
        let tipoOfferta = "Biglietto Over 65";
        document.getElementById("tipo-offerta").innerHTML = tipoOfferta;
        document.getElementById("prezzo-biglietto").innerHTML = costoBiglietto;    
    }   

    //genero casualmente "codice cp" e "carrozza"

});    
//aggiungo il listener al click di "genera"
