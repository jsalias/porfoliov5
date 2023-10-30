const imagen = document.getElementById("imagen");
const boton = document.getElementById("boton");

boton.addEventListener("mouseover", function() {
    imagen.classList.add("rotated");
});

boton.addEventListener("mouseout", function() {
    imagen.classList.remove("rotated");
});

const mainNav = document.getElementById('mainNav');

// Espera 2 segundos (2000 milisegundos) y luego muestra el menú
setTimeout(() => {
    mainNav.style.top = '0';
}, 2000);



document.addEventListener("DOMContentLoaded", function () {
    const mainNav = document.getElementById("mainNav");
    const container = document.querySelector(".container");
    let isNavFixed = false; // Variable para verificar si el nav está fijo
    let navOriginalStyles = {}; // Almacena los estilos originales del nav

    // Función para comprobar si el contenedor está en la vista
    function isContainerInView() {
        const containerRect = container.getBoundingClientRect();
        return containerRect.bottom >= 0;
    }

    // Función para fijar el nav
    function fixNav() {
        navOriginalStyles = {
            position: mainNav.style.position,
            top: mainNav.style.top,
            left: mainNav.style.left,
            right: mainNav.style.right,
            transition: mainNav.style.transition,
        };

        mainNav.style.position = "fixed";
        mainNav.style.top = "0";
        mainNav.style.left = "0";
        mainNav.style.right = "0";
        mainNav.style.transition = "transform 0.3s ease-in-out"; // Agrega una transición suave
        isNavFixed = true;
    }

    // Función para volver a la posición original
    function resetNav() {
        mainNav.style.position = navOriginalStyles.position;
        mainNav.style.top = navOriginalStyles.top;
        mainNav.style.left = navOriginalStyles.left;
        mainNav.style.right = navOriginalStyles.right;
        mainNav.style.transition = navOriginalStyles.transition;
        isNavFixed = false;
    }

    // Función para manejar el scroll
    function handleScroll() {
        if (!isNavFixed && !isContainerInView()) {
            // El contenedor ya no está en la vista y el nav no está fijo, entonces fija el nav
            fixNav();
        } else if (isNavFixed && isContainerInView()) {
            // El contenedor está en la vista y el nav está fijo, entonces vuelve a la posición original
            resetNav();
        }
    }

    // Agregar un event listener para el scroll
    window.addEventListener("scroll", handleScroll);
});
    

 
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


 document.addEventListener("scroll", function () {
    const titles = document.querySelectorAll(".title");
    const underlines = document.querySelectorAll(".underline");
    
    for (let i = 0; i < titles.length; i++) {
        if (isElementInViewport(titles[i])) {
            const screenWidth = window.innerWidth; // Obtenemos el ancho de la pantalla
            console.log(screenWidth);
            // Calculamos el valor de ancho en función del ancho de la pantalla
            let underlineWidth = "48%"; // Valor predeterminado
            if (screenWidth <= 825) {
                underlineWidth = "18%";
                setTimeout(() => {
                    titles[i].style.left = "48%";
                    titles[i].style.transform = "translateX(0%)";
                }, 200 + i * 200);
            } 

            if(screenWidth <= 825){
                setTimeout(() => {
                    titles[i].style.left = "0";
                    titles[i].style.opacity = "1";
                    underlines[i].style.width = underlineWidth;
                }, 200 + i * 200);

            }else{
                setTimeout(() => {
                    titles[i].style.left = "0";
                    titles[i].style.opacity = "1";
                    underlines[i].style.width = underlineWidth;
                }, 200 + i * 200);
                setTimeout(() => {
                    titles[i].style.left = "48%";
                    titles[i].style.transform = "translateX(-50%)";
                }, 200 + i * 200);
            }

          
            
            
        }
    }
});  





// Función para detectar el scroll y activar las animaciones
function detectarScroll() {
    const contenedorFoto = document.querySelector('.contenedor-foto');
    const contenedorBarras = document.querySelector('.contenedor-barras');
    const contenedorGallery = document.querySelector('.contenedor-gallery');
    const contenedorBlog = document.querySelector('.blog');
    const contenedorBlog1 = document.querySelector('.blog1');
    const contenedorBlog2 = document.querySelector('.blog2');
    const contenedorBlog3 = document.querySelector('.blog3');
    
    const scrollY = window.scrollY || window.pageYOffset;
    const umbral = window.innerHeight / 2; // Puedes ajustar este umbral según tus necesidades
  
    // Verificar si el usuario ha hecho scroll hasta la parte deseada de la página
    if (scrollY >= contenedorFoto.offsetTop - umbral) {
      contenedorFoto.classList.add('aparecer-izquierda');

    }
  
    if (scrollY >= contenedorGallery.offsetTop - umbral) {
        contenedorGallery.classList.add('aparecer-gallery');
      }

      if (scrollY >= contenedorBlog.offsetTop - umbral) {
        contenedorBlog.classList.add('aparecer-blog');
      }
      if (scrollY >= contenedorBlog.offsetTop - umbral) {
        contenedorBlog1.classList.add('aparecer-blog1');
      }
      if (scrollY >= contenedorBlog.offsetTop - umbral) {
        contenedorBlog2.classList.add('aparecer-blog2');
      }
      if (scrollY >= contenedorBlog.offsetTop - umbral) {
        contenedorBlog3.classList.add('aparecer-blog3');
      }
    // Obtener las coordenadas del contenedor-barras
    const rect = contenedorBarras.getBoundingClientRect();
  
    // Verificar si el contenedor-barras está completamente en pantalla
    if (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    ) {
      // Agregar la clase de animación solo si el contenedor-barras está en pantalla
      contenedorBarras.classList.add('aparecer-derecha');
    }
  }
  
  // Agregar un evento para detectar el scroll
  window.addEventListener('scroll', detectarScroll);
  
  // Llamar a detectarScroll() una vez para manejar el caso cuando la página ya está cargada y se encuentra en la posición inicial deseada
  detectarScroll();
  
  


  // script.js
document.getElementById("mostrarModal1").addEventListener("click", function() {
    document.getElementById("miModal1").style.display = "block";
});

document.querySelector(".cerrar1").addEventListener("click", function() {
    document.getElementById("miModal1").style.display = "none";
});
document.getElementById("mostrarModal2").addEventListener("click", function() {
    document.getElementById("miModal2").style.display = "block";
});

document.querySelector(".cerrar2").addEventListener("click", function() {
    document.getElementById("miModal2").style.display = "none";
});
document.getElementById("mostrarModal3").addEventListener("click", function() {
    document.getElementById("miModal3").style.display = "block";
});

document.querySelector(".cerrar3").addEventListener("click", function() {
    document.getElementById("miModal3").style.display = "none";
});
document.getElementById("mostrarModal4").addEventListener("click", function() {
    document.getElementById("miModal4").style.display = "block";
});

document.querySelector(".cerrar4").addEventListener("click", function() {
    document.getElementById("miModal4").style.display = "none";
});


const check = document.querySelector(".check");
check.addEventListener('click',idioma);


let id=check.checked;


function idioma(){
  
    if(id== true){
        location.href="index-esp.html";
       id=false;
       
    }
    else{
        location.href="index.html";
      
    }
}


