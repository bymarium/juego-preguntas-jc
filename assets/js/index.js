const navMenu   = document.getElementById('navbar-menu'),
      navToggle = document.getElementById('navbar-toggle'),
      navClose  = document.getElementById('navbar-close');

if(navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('navbar__menu--visible');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('navbar__menu--visible');
  })
}

const navLinks = document.querySelectorAll('.navbar__link');

const handleClickLink = () => {
  navMenu.classList.remove('navbar__menu--visible');
}

navLinks.forEach(link => link.addEventListener('click', handleClickLink));
 
const scrollHeader = () => {
  const header = document.getElementById('header');
  this.scrollY >= 50
    ? header.classList.add('header--scrolling')
    : header.classList.remove('header--scrolling');
}

window.addEventListener('scroll', scrollHeader);

const alertH = document.getElementById("rulesh");
if (alertH) {
  alertH.addEventListener("click", () => {
    Swal.fire({
      title: "Reglas de juego",
      html: "1. El juego consta de 10 preguntas <br/> 2. Disponerá de 60 segundos para cada pregunta <br/> 3. Cada pregunta tendrá dos opciones de respuestas <br/> 4. Deberá seleccionar la que considere correcta y darle click en el boton de enviar <br/> 5. Si la respuesta es correcta se marcará en verde, de lo contrario, se marcará en rojo <br/> 6. Al finalizar el juego se le dará un puntaje que determina si ganó o perdió el juego de preguntas",
      confirmButtonText: "Entendido",
      confirmButtonColor: "#ff289b",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  });
}

const alertF = document.getElementById("rulesf");
if (alertF) {
  alertF.addEventListener("click", () => {
    Swal.fire({
      title: "Reglas de juego",
      html: "1. El juego consta de 10 preguntas <br/> 2. Disponerá de 60 segundos para cada pregunta <br/> 3. Cada pregunta tendrá dos opciones de respuestas <br/> 4. Deberá seleccionar la que considere correcta y darle click en el boton de enviar <br/> 5. Si la respuesta es correcta se marcará en verde, de lo contrario, se marcará en rojo <br/> 6. Al finalizar el juego se le dará un puntaje que determina si ganó o perdió el juego de preguntas",
      confirmButtonText: "Entendido",
      confirmButtonColor: "#ff289b",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  });
}