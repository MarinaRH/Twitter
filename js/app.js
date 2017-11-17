//creando primer contenedor
var container1 = document.getElementById('container1');
var text = document.createElement('p');
var text2 = document.createElement('div');
var text3 = document.createElement('p');
   text.innerHTML = 'Reto de Código <br> Hola, <br> Soy front-end Developer jr. <br> <br>';
   text3.innerHTML = '<br> CÓDIGO <br> ';
   text2.classList.add('line');
   text3.classList.add('blue');
   container1.appendChild(text);
   container1.appendChild(text2);
   container1.appendChild(text3);


// creando el segundo div
