//Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65.
//L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

let chilometri = prompt('inserisci i chilometri che vuoi percorrere');
console.log(chilometri);

let eta = prompt('inserisci i tuo anni');
console.log(eta);

let prezzoBase = chilometri * 0.21;
console.log(prezzoBase);

let prezzoOver;
let prezzoMinori;
if( eta < 18 ) {
   prezzoMinori = ( ( prezzoBase * 20 ) / 100);
   prezzoMinori = prezzoBase - prezzoMinori;
   prezzoMinori = prezzoMinori.toFixed(2);
   console.log(prezzoMinori);
   
} else if ( eta > 65 ) {
   prezzoOver = (( prezzoOver * 40 ) / 100);
   

//} else if (eta > 18 || eta < 65) {
 //  console.log(prezzoBase);

}else {
    console.log("Valore non accettato")
}