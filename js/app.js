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

   container1.appendChild(portada);
   container1.appendChild(imagen);
   container1.appendChild(parraf);
   parraf.appendChild(text);


// creando el  contenedor de los mensajes Impresos
var area = document.getElementById('insert-text');
var boton = document.getElementById('tweet');
var messages = document.getElementById('container-text');

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

var contador = document.getElementById('contador');
var caracterMax= 140;

area.addEventListener('keyup', Contador);
function Contador(event) {
    // si no existe, se asigna MAX
    // si existe se habilita el boton y se resta el max con la longitud
    // if (event.target.value) {
    if (event.target.value != '') {
      //tweetBtnActive(true);
      var caracterWrites= event.target.value.length;
      var total = caracterMax - caracterWrites;      
      contador.textContent = total;
      //changeColor(total);
      // checkEnters(event);
      // checkLong(event);
      /* if (event.keyCode === 13)
        event.target.rows = event.target.rows + 1; */
    } else {
      //tweetBtnActive(false);
      //contador.textContent = caracterMax;
    }
  }