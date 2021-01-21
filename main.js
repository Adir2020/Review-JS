//trabalhando com array

//const lista = ["maça", "banana", "abacaxi"];

// adicionando elementos ao array
//lista.push("uva", "melancia") 

//retirando elementos do array
//lista.pop("uva", "melancia")

// comando para ver o tamanho do array
//console.log(lista.toString());


// if e else
/*
const idade = prompt("Qual é a sua idade ?")
if (idade >= 18){
    alert("Acesso autorizado");
}else{
    alert("Acesso negado");
};

 

// laços e repetição
/*
var count = 0;
while (count <= 5){
    console.log(count);
    count++;
}


var count;
for(count=0; count <= 5; count++){
    alert(count);
};


var d = new Date();
alert(d.getUTCFullYear());


// functions

function soma(n1, n2){
    return n1 + n2;

}

function validateDate(date){
    var validate;

    if ( date >= 18){
     validate = true
     alert("acess autorized")
    }else{
        validate = false
        alert("acess negate")
    }
    return validate;
}
var date = prompt("what your date ?");
console.log(validateDate(date));
*/

// manipulando elementos da pagina

function button(){
    document.getElementById("obrigado").innerHTML = "<b>obrigado</b>";
    //console.log(document.getElementById("obrigado"))
}


function redict(){
    window.open("https://www.facebook.com.br");
    
}