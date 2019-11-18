// creo prima la variabile utente perchè altrimenti si può vedere il numero del pc e quindi si può barare
var numero_utente = prompt("Perfavore inserire un numero da 1 a 6");
console.log(numero_utente);
// creo la variabile del lancio del pc
var numero_pc = Math.floor(Math.random() * 6) + 1;
console.log(numero_pc);
// controllo se l'imput dell'utente è un numero
if (isNaN(numero_utente)) {
    console.log("numero non inserito");

} else if (numero_utente > 6) {
    console.log("non e' stato inserito un numero corretto");
    //errore nel caso inserito numero errato
} else {

    if (numero_pc > numero_utente) {
        console.log("hai perso");
        //condizione in caso della partita persa
    } else if (numero_pc == numero_utente) {
        console.log("hai pareggiato");
        //condizione in caso di pareggio
    } else {
        console.log("hai vinto");
        // condizione in caso di vittoria
    }


}
