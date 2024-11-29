let tiponumero = true; //alterna n1 e n2
let tipocalcolo = true;//sposta il calcolo fatto prima sotto
let n1 ="";
let n2 = "";
let tot ="";
let segno1="";//segno appena inserito
let segno2 = "";//segno vecchio

//al click di un numero assegno alle variabili il numero es. n1 n2
function n(numero){
    if (tiponumero==true){
        n1 = `${n1}${numero}`;//scrivo n1
        n1 = parseInt(n1)//trasformo n1
        document.getElementById("risposta").innerText= n1;
    }else if (tiponumero ==  false){//messo il segno, adesso scrivo n2
        n2 = `${n2}${numero}`;//scrivo n2
        n2 = parseInt(n2);//trasformo n2
        document.getElementById("risposta").innerHTML= `${n1} ${segno1} ${n2}`;//scrivo tutta la frase
        segno2 = segno1;//nuova variabile per memorizzare il segno premuto prima di quello nuovo
    }
}
//scelgo l'operazione
function operazione(input){
    tiponumero = false;//segna che ha messo il numero 1
        
        switch(input){
            case 'somma':
                segno1='+';
                break;
            case 'sottrazione':
                segno1='-';
                break;
            case 'moltiplicazione':
                segno1 = '&times';
                break;
            case 'divisione':
                segno1 = '&divide';
                break;
            case 'potenza':
                segno1 ='^';
                break;
            case 'radice':
                segno1 ='&#x221A';
                n2=0;
                segno2=segno1;// riassegno il segno perche` salta l'assegnazione del secondo numero
                break;
            case 'uguale':
                segno1="";
                if (n2 === ''){     //3 uguali perche con due riconosce lo 0 come stringa vuota
                    alert("inserire tutti i valori prima di premere l'uguale");
                    document.getElementById("risposta").innerHTML= ``;
                    document.getElementById("input").innerHTML= ``;
                    n1 ="";
                    tiponumero=true;//si puo` reinserire il n1
                    return;
                }else{
                    console.log(n1, n2, segno1, tot);
                }
                break;
        }
    
    if (tipocalcolo){
        document.getElementById("risposta").innerHTML= ` ${n1} ${segno1}`;
    }else {
        if (segno2=='&#x221A'){//if creato solo per evitare che venga scritto n2
            n2 = "";
        }
    document.getElementById("input").innerHTML= `${n1} ${segno2} ${n2}`
    n1=uguale(n1, n2, segno2) ;
    n2 ="";
    document.getElementById("risposta").innerHTML= `${n1} ${segno1}`;
    }
    tipocalcolo= false;
}

// funzione che mi restituisce il valore dell'operazione
function uguale(n1, n2, segno1){

    switch(segno1){
        case '+':
            tot = n1+n2;
            break;
        case '-':
            tot = n1-n2;
            break;
        case '&times':
            tot = n1*n2;
            break;
        case '&divide':
            tot = n1/n2;
            break;
        case '^':
            tot = Math.pow(n1, n2);
            break;
        case '&#x221A':
            tot = Math.sqrt(n1);
            break;
        case "":
            uguale(n1,n2, segno1);
            return;
        }
    return tot;
}

function cancella(){
    n1= n2 = tot = segno1 = "";
    tiponumero = true;
    tipocalcolo = true;
    document.getElementById("input").innerHTML="";
    document.getElementById("risposta").innerHTML="";
}