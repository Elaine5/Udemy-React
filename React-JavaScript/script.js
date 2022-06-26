
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
} */


// Switch

x = 2;

switch(x){
    case 0:
        alert("O x vale 0!")
}