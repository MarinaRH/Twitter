//creando primer contenedor
var container1 = document.querySelector('.container1');
var text = document.createElement('p');
var text2 = document.createElement('div');
var text3 = document.createElement('p');
   text.innerHTML = '<br> Reto de Código <br> <br> Hola, <br> Soy front-end Developer jr. <br> <br>';
   text3.innerHTML = '<br> CÓDIGO <br> <br> ';
   text2.classList.add('line');
   text3.classList.add('blue');
   container1.appendChild(text);
   container1.appendChild(text2);
   container1.appendChild(text3);


// creando el segundo contenedor
var area = document.getElementById('insert-text');
var boton = document.getElementById('tweet');
var lista = document.getElementById('container-text');

boton.addEventListener('click',function(event){
    if(area.value){
       var parrafo = document.createElement('textarea');
       var texto = document.createElement('p');

       parrafo.textContent=area.value;
       parrafo.classList.add('outText');
       lista.classList.add('out')

       parrafo.appendChild(texto);
       lista.appendChild(parrafo);
       area.value = '';
    }
})