let vitoria
let derrota

function saldoDeVitoria() {
   let resultado = vitoria - derrota
   return console.log (resultado)
}

function nivel(vitoria, derrota) {
    let saldo = vitoria + derrota
        if ( saldo >= 10) {
            console.log ( "ferro")
        } else if ( saldo <= 11 && saldo >= 20){
            console.log = ("Brosnze")
        } else if ( saldo >= 21 && saldo <= 50){
            console.log = ( "Prata")
        } else if ( saldo >=51 && saldo <= 80 ){
            console.log = ( "Ouro")
        } else if ( saldo >= 81 && saldo <= 90){
            console.log = ( "Diamente")
        } else if ( saldo >= 91 && saldo <= 100){
            console.log = ( "Imortal")
        }
}

console.log =( " O Heroi tem de saldo " + saldoDeVitoria + "e esta no nivel de " + nivel )