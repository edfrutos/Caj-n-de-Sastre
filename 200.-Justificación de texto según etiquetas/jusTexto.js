//Puedes usar el evento "window.onload" en JavaScript para ejecutar una función después de 
//que se haya cargado el contenido de la página. Para hacer esto, puedes asignar una función 
//a la propiedad "window.onload". Por ejemplo:

window.onload = function() {
  // Aquí va el código que quieres ejecutar después de que la página se haya cargado
  // A continuación el código que se va a cargar después de 'windows.onload'
  //Aquí hay un ejemplo de una función JavaScript que puede ayudar a dividir el contenido 
  //de cada elemento <li> en líneas de un tamaño específico de caracteres sin romper palabras:

function justifyText() {
    // Obtener todos los elementos <li>
    var listItems = document.querySelectorAll("li");
  
    // Establecer el tamaño de caracteres para cada línea
    var lineLength = 40;
  
    // Recorrer cada elemento <li>
    for (var i = 0; i < listItems.length; i++) {
      var item = listItems[i];
      var words = item.innerHTML.split(" ");
      var newHTML = "";
      var line = "";
  
      // Recorrer cada palabra en el elemento <li>
      for (var j = 0; j < words.length; j++) {
        var word = words[j];
  
        // Comprobar si la palabra actual más la línea actual supera el tamaño de caracteres
        if (line.length + word.length + 1 > lineLength) {
          // Si es así, agregar la línea actual al nuevo HTML y comenzar una nueva línea
          newHTML += line + "<br>";
          line = "";
        }
  
        // Agregar la palabra actual a la línea
        line += word + " ";
      }
  
      // Agregar la última línea al nuevo HTML
      newHTML += line;
  
      // Reemplazar el contenido original del elemento <li> con el nuevo HTML
      item.innerHTML = newHTML;
    }
  }
  // Esta función busca todos los elementos <li>, divide el contenido en palabras y 
  // luego los agrupa en líneas de un tamaño específico de caracteres. Cada vez que se 
  // cumple el tamaño de caracteres, se agrega una nueva línea al contenido y se comienza 
  // una nueva línea. Finalmente, la función reemplaza el contenido original de cada 
  // elemento <li> con el nuevo contenido justificado.
  
  // Asegúrate de ejecutar esta función después de que el contenido de la página se haya cargado, 
  // por ejemplo, utilizando el evento "window.onload".
};

// Función desactivada por estar usando 'windows.onload'
//También puedes usar la función addEventListener para agregar el evento "load" a la ventana:


//window.addEventListener("load", function() {
  // Aquí va el código que quieres ejecutar después de que la página se haya cargado
//});

//En ambos casos, la función que se proporciona se ejecutará después de que se haya 
//cargado el contenido de la página, incluidas las imágenes, estilos, scripts, etc.


