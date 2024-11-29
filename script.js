//qua ci sono delle funztioni untili per dopo ma prima bisogna mettere l'aggiunta dei numeri
let tipo = true;
let n1 ="";
let n2 = "";
let tot ="";
let segno=""

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
    switch(input){
        case 'somma':
            segno='+';
            break;
        case 'sottrazione':
            segno='-';
            break;
        case 'moltiplicazione':
            segno = 'x';
            break;
        case 'divisione':
            segno = '&divide';
            break;
        case 'potenza':
            segno ='^';
            break;
        case 'radice':
            segno ='√';
            break;
    }
    document.getElementById("input").innerHTML= `${n1} ${segno}`;
}

function uguale(){
    console.log(n1, n2);

    switch(segno){
        case '+':
            tot = n1+n2;
            break;
        case '-':
            tot = n1-n2;
            break;
        case 'x':
            tot = n1*n2;
            break;
        case '&divide':
            tot = n1/n2;
            break;
        case '^':
            tot = Math.pow(n1, n2);
            break;
        
    }

    document.getElementById("risposta").innerText=tot;
    n1 = tot;
    n2 = "";
}

function cancella(){
    n1= n2 = tot = "";
    tipo = true;
    document.getElementById("input").innerHTML="";
    document.getElementById("risposta").innerHTML="";
}