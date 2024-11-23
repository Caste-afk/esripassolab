//qua ci sono delle funztioni untili per dopo ma prima bisogna mettere l'aggiunta dei numeri
let tipo = true;
let n1 =0;
let n2 = 0;
function n(){
    
}
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
