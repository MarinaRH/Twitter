//creando primer contenedor
var container1 = document.querySelector('.container1');
var portada = document.createElement('div');
var imagen = document.createElement('img');
var parraf = document.createElement('div');
var text = document.createElement('span');

   text.innerHTML = 'Marina Rodriguez, <br>Front-end Developer jr. <br> @marina1717 <br> <br>';
   imagen.src=('assets/images/marina.jpg');
   //agregando las clases de css
   portada.classList.add('portada');
   imagen.classList.add('img-perfil');
   parraf.classList.add('parraf');
   text.classList.add('text');
  // agregando hjo con padres
   container1.appendChild(portada);
   container1.appendChild(imagen);
   container1.appendChild(parraf);
   parraf.appendChild(text);


// creando el  contenedor de los mensajes Impresos
var area = document.getElementById('insert-text');
var boton = document.getElementById('tweet');
var messages = document.getElementById('container-text');

//funcion para publicar tweets
boton.addEventListener('click',function(event){
  event.preventDefault();
  if(area.value != ''){
    var parrafo = document.createElement('div');
    var texto = document.createElement('p');
      
    texto.innerHTML = area.value + '<br> <br>' + '<i> Publicado: ' + moment().format('LTS') + '</i>';
    parrafo.classList.add('outText');
       
    parrafo.appendChild(texto);
    messages.appendChild(parrafo);

    area.value = '';
    area.focus();
  }else {
       event.target.disabled = false;
  }
});

//para el crear el contador
var contador = document.getElementById('contador');
var caracterMax= 140;

area.addEventListener('keyup', Contador);
function Contador(event) {
  if (event.target.value != '') {
    botonAct(true);
    var caracterWrites= event.target.value.length;
    var total = caracterMax - caracterWrites;      
    contador.textContent = total;
      
    colorCont(total);
    maxArea(event);
  } else {
    botonAct(false);
    contador.textContent = caracterMax;
  }
}
  
//agregar funcion para cambair de color contador dependiendo de los caracteres.
function colorCont(total) {
  switch (true) {
    case (total < 0): 
        botonAct(false);
        contador.classList.add('red');
        contador.classList.remove('blue');
        contador.classList.remove('green');
    break;
    case (total < 11): 
        contador.classList.add('blue');
        contador.classList.remove('red');
        contador.classList.remove('green');
    break;
    case (total < 21):
        contador.classList.add('green');
        contador.classList.remove('red');
        contador.classList.remove('blue');
    break;
    default:
        contador.classList.remove('red', 'orange', 'green');
      
  }
}

//para agrandar tamaño de textarea si hay un enter.
function maxArea(event) {
  if (event.keyCode === 13) {
      event.target.style.height = "4px";
      event.target.style.height = (event.target.scrollHeight) + "px";
  }
}

// Para activar o desactivar el butom de acuerdo al numero de caracteres
var Boton = document.querySelector('.btn');
function botonAct(centinel) {
  Boton.disabled = !centinel;
}