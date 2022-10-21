"use strict";



const km = Number(prompt("Inserisci i chilometri da percorrere"));
if( km <= 0 || km > 2000) {
    alert("I chilometri percorsi devono essere compresi tra 1 e 2000, reinserire i dati corretti");
    window.location.reload();
}
const eta = Number (prompt("Inserisci l'età del passeggero"));
if( eta <= 0 || eta > 120) {
    alert("L'età deve essere compresa tra 0 e 120, reinserire i dati corretti");
    window.location.reload();
}
const tariffaPerKm = 0.21;
if ( eta >= 18 && eta < 65 ) {
   const costoBiglietto = (km * tariffaPerKm).toFixed(2);
   document.getElementById('prezzo-biglietto').innerHTML = costoBiglietto ;

} else {
    if (eta < 18) {
        const costoBiglietto = ((km * tariffaPerKm) - ( (km * tariffaPerKm * 20) / 100)).toFixed(2);
        document.getElementById('prezzo-biglietto').innerHTML = costoBiglietto;
        document.getElementById('messaggio-sconto').innerHTML = sconto20;

    } 
    if (eta >= 65) {
        const costoBiglietto = ((km * tariffaPerKm) - ( (km * tariffaPerKm * 40) / 100)).toFixed(2);
        document.getElementById('prezzo-biglietto').innerHTML = costoBiglietto;
        
    } 
}    
