
/* //var  nome = "Elaine";


// função entrar // innerHTML = string

// if = se

function entrar(){

    var area = document.getElementById('area');
    var texto = prompt('Digite seu nome?');

    if(texto == '' || texto == null ){
        alert('Digite seu nome novamente!');
        area.innerHTML = 'Bem vindo ...';
    }else{
        area.innerHTML = 'Bem vindo ' + texto;
    }

}

function entrar2(nome){

    var area = document.getElementById('area2');
    var texto = prompt('Digite seu sobrenome?');
    area.innerHTML = nome + " " + texto;

} 

// Aprendendo LOOP
// while = Enquanto

x = 0;

while(x < 10){

    document.write("</br> O valor do X: " + x);

    x++;
    // x++ = x = x +1;
}

document.write("</br></br></br> O X esta valendo: "+ x + "</br></br>");


// For = Para (pode declarar mais de uma condicao)

for(a = 0; a < 10; a++ ){
    document.write("</br> O valor do A: " + a);
}

// Switch

document.write("</br> Escolha seu pedido: </br>");
document.write("</br> 0 - Sorvete / 1 - Suco </br>");
document.write("</br> 2 - Coca cola / 3 - Agua gelada </br></br>");

function pedir(){

    x = prompt("O que deseja pedir?");

    switch(x){
        case "0":
            alert("Voce pediu Sorvete");
            break;
        case "1":
            alert("Voce pediu Suco");
            break;
        case "2":
            alert("Voce pediu Coca cola");
            break;
        case "3":
            alert("Voce pediu Agua gelada");
            break;
        default:
            alert("Ops nao temos essa opcao");
            break;    
    }
} */

function acao(){
    document.write("Executando...<br/>");
}

// Executa de tempo em tempo!
// setInterval(acao, 1000);

setTimeout(acao, 3000);