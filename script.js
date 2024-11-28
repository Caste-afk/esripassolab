//qua ci sono delle funztioni untili per dopo ma prima bisogna mettere l'aggiunta dei numeri
let tipo = true;
let n1 ="";
let n2 = "";
let tot ="";

function n(numero){
    if (tipo==true){
        n1 = `${n1}${numero}`;
        n1 = parseInt(n1)
        document.getElementById("input").innerText= n1;
    }else if (tipo ==  false){
        n2 = `${n2}${numero}`;
        n2 = parseInt(n2);
        document.getElementById("input").innerText= `${n1} ${segno} ${n2}`;
    }
}

function operazione(input){
    tipo = false;
    let segno;
    switch(input){
        case 'somma':
            segno='+';
            break;
        case 'sottrazione':
            segno='-';
            break;
        case 'moltiplicazione':
            segno = '&times';
            break;
        case 'divisione':
            segno = '&divide';
            break;
        case 'potenza':
            segno ='^';
            break;

    }
    document.getElementById("input").innerHTML= `${n1} ${segno}`;
}

/*
function somma(){
    let risposta = n1+n2;
    document.getElementById("risposta").innerHTML =`${n1} + ${n2} = ${risposta}`;
}

function sottrazione(){
    let risposta = n1-n2;
    document.getElementById("risposta").innerHTML =`${n1} - ${n2} = ${risposta}`;
}

function moltiplicazione(){
    let risposta = n1*n2;document.getElementById("risposta").innerHTML =`${n1} &times ${n2} = ${risposta}`;
}

function divisione(){
    if(n2 ==0){
        alert('NON PUOI DIVIDERE PER ZERO')
    }
    let risposta = n1/n2;
    document.getElementById("risposta").innerHTML =document.getElementById("risposta").innerHTML =`${n1} &divide ${n2} = ${risposta}`;;
}

function potenza(){
    let risposta = Math.pow(n1, n2)
    document.getElementById("risposta").innerHTML =document.getElementById("risposta").innerHTML =`${n1} ^ ${n2} = ${risposta}`;;
}

function radice(){
    let risposta = Math.sqrt(n1);
    document.getElementById("risposta").innerHTML =`&#x221A ${risposta}`;
}
*/