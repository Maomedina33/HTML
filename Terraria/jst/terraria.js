function iniciarJuego() {
  // Aquí se coloca el código para iniciar el juego }

  let botonPersonajeJugador = document.getElementById("boton-personaje");
  botonPersonajeJugador.addEventListener("click", () => {
  seleccionarPersonajeJugador();
  seleccionarEnemigoPersonaje(); 
  });
}


function seleccionarPersonajeJugador() {
  // el input se define con esta sentencia: document.getElementById("personaje").checked
    const personajes = document.getElementsByName("Personaje")
    const spanPersonajeJugador = document.getElementById("personaje-jugador")
    const spanHistoryJugador = document.getElementById("history-jugador")
    const spanPersonajeAtaque = document.getElementById("personaje-jugador-ataque")

    let personajeSeleccionado = null;

    for(const personaje of personajes){
      
      if(personaje.checked){
        
        personajeSeleccionado = personaje.value;
        break;
      }  
    }

    if(!personajeSeleccionado){
      alert("No se ha seleccionado ningún personaje");
      return;
    }

    //Mostrar nombre del span del personaje

    spanPersonajeJugador.textContent = personajeSeleccionado;
    spanPersonajeAtaque.textContent = personajeSeleccionado;

    //Mostrar historia segun personaje
    
    switch (personajeSeleccionado) {

         case "knight":
         spanHistoryJugador.innerHTML = "💀💀 Elegiste el camino del Knight 💀💀<br><br> El caballero, protector y líder, armado con su espada y escudo. La justicia es su guía "
                  +"luchando para proteger a los inocentes y mantener el orden en el reino. Su coraje es inquebrantable y su resistencia, legendaria.";
           break;
        
        case "titan":
         spanHistoryJugador.innerHTML ="💀💀 Elegiste la brutalidad del TitÁn 💀💀<br><br> El Titán es un guerrero de fuerza colosal, capaz de derribar montañas "
      +" con su poder descomunal. Su presencia en el campo de batalla es aterradora, y su furia arrasa con todo lo que se interpone en su camino.";
           break;

        case "shaman":
         spanHistoryJugador.innerHTML ="💀💀 Elegiste la furia elemental del Shaman 💀💀<br><br> Como un maestro de los elementos, el Shaman posee una profunda conexión con la naturaleza."
      +"Su sabiduría y poder provienen de la tierra, el aire, el fuego y el agua. Puede invocar tormentas, terremotos y oleadas de energía mística.";
           break;

        case "sorcerer":
         spanHistoryJugador.innerHTML ="💀💀 Elegiste el camino de la maldicion con el Sorcerer 💀💀<br><br> El Sorcerer es un hechicero oscuro, cuyo conocimiento de las artes prohibidas "
      +"le otorga un control absoluto sobre la magia oscura. Con su poder, lanza maldiciones, invoca criaturas del abismo y manipula la realidad a su antojo.";
           break;
        
        case "dragon":
         spanHistoryJugador.innerHTML ="💀💀 Elegiste la furia del Dragon de las profundidades 💀💀<br><br> Como un descendiente de las antiguas criaturas míticas "
      +" el Dragón es un ser majestuoso y aterrador. Su aliento es fuego ardiente, y sus alas vastas cubren los cielos mientras "
      +"su fuerza ancestral lo hace casi invencible.";
           break;

        case "skull":
         spanHistoryJugador.innerHTML ="💀💀 Elegiste el camino renegado de un Skull 💀💀<br><br> El Skull es un guerrero sombrío que ha abandonado las normas del mundo. " 
      +"Con una calavera como rostro, este ser oscuro utiliza poderes de la muerte para sembrar el terror y controlar a los muertos."
      +"Su venganza es su motivación, y su alma está perdida en las sombras.";
           break;

        case "fairy":
         spanHistoryJugador.innerHTML ="💀💀 Elegiste el camino de la magia de los Fairy 💀💀<br><br> Las hadas son seres encantadores, pero no subestimes su magia."
      +"Con su naturaleza traviesa y su habilidad para manipular la magia pura, las hadas pueden curar, confundir y controlar los elementos a su favor "
       +"Su belleza oculta una enorme fuerza.";
          break;
        case "devil":
         spanHistoryJugador.innerHTML ="💀💀 Elegiste el camino de la oscuridad de un Devil 💀💀<br><br> El Devil es un ser infernal nacido del caos." 
      +"Su influencia maligna corrompe todo lo que toca, y su poder sobre el fuego y la sombra es absoluto. Su mirada es penetrante, "
       +"y su voluntad es inquebrantable. No hay límites en su camino hacia el dominio del mundo. ";
          break;
ks
        default:
          spanHistoryJugador.innerHTML ="";
      }
 }

function seleccionarEnemigoPersonaje() {
   const contrincanteAleatorio = aleatorio(1,8);
   let spanEnemigoPersonaje = document.getElementById("personaje-enemigo")
   
   const personajes = ["knight","titan","shaman","sorcerer","dragon","skull","fairy","devil"];


  spanEnemigoPersonaje.textContent = personajes[contrincanteAleatorio - 1];

 } 

 //función aleatorio debe ir fuera de cualquier otra

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


window.addEventListener("load", iniciarJuego); // Tu código aquí se ejecutará después de que todo el HTML haya cargado
  
