const startGameH = document.querySelector(".btn-neon");
const startGameL = document.querySelector(".btn-login");
const exitGame = document.querySelector(".buttons .quit");
const gameQuiz = document.querySelector(".quiz__game");
const resultGame = document.querySelector(".result__game");
const optionGame = document.querySelector(".option__game");
const timeLine = document.querySelector("header .time__line");
const timeText = document.querySelector(".timer .time__left");
const timeCount = document.querySelector(".timer .timer__sec");
const btnSubmit = document.querySelector("footer .btn-submit");

startGameH.onclick = () => {
    document.getElementById('login').style.display = "grid";
    document.getElementById('home').style.display = "none";
}
startGameL.onclick = ()=>{
    document.getElementById('login').style.display = "none";
    document.getElementById('home').style.display = "flex";
    gameQuiz.classList.add("activeQuiz"); //mostrar el juego
    showQuetions(0); //llamado a la funcion showQuestions
    queCounter(1); //pasa un unico parametro a queCounter
    startTimer(60); //llamado a la funcion startTimer
    startTimerLine(0); //llamado a la funcion startTimerLine
    btnSubmit.classList.add("show");
}

exitGame.onclick = ()=>{
    gameQuiz.classList.remove("activeQuiz"); //ocultar juego
}

let timeValue =  60;
let queCount = 0;
let queNumb = 1;
let correctAns = 5;
let incorrectAns = 2.5;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restartGame = resultGame.querySelector(".buttons .restart");
const quitQuiz = resultGame.querySelector(".buttons .quit");


restartGame.onclick = ()=>{
    gameQuiz.classList.add("activeQuiz"); //mostrar el juego
    resultGame.classList.remove("activeResult"); //ocultar resultado
    timeValue = 60; 
    queCount = 0;
    queNumb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(queCount); //llamado a la funcion showQuestions
    queCounter(queNumb); //pasar el valor de queNumb a queCounter
    clearInterval(counter); //limpiar/resetear contador anterior
    clearInterval(counterLine); //limpiar/resetear la linea de conteo anterior
    startTimer(timeValue); //llamado a la funcion startTimer
    startTimerLine(widthValue); //llamado a la funcion startTimerLine
    btnNext.classList.remove("show");
    btnSubmit.classList.add("show") //ocultar boton de sguiente
}

quitQuiz.onclick = ()=>{
    window.location.reload(); //recargar la pagina
}

const btnNext = document.querySelector("footer .btn-next");
const bottom_ques_counter = document.querySelector("footer .total__question");

btnNext.onclick = ()=>{
    if(queCount < questions.length - 1){ //si el numero de pregunta es menor a la cantidad total de preguntas
        queCount++; //incrementar el valor queCount
        queNumb++; //incrementar el valor queNumb
        showQuetions(queCount); //llamado a la funcion showQuestions
        queCounter(queNumb); //pasar el valor de queNumb a queCounter
        clearInterval(counter); //limpiar/resetear contador anterior
        clearInterval(counterLine); //limpiar/resetear la linea de conteo anterior
        startTimer(timeValue); //llamado a la funcion startTimer
        startTimerLine(widthValue); //llamado a la funcion startTimerLine
        btnSubmit.classList.add("show");
        btnNext.classList.remove("show"); //ocultar el boton de siguiente
    }else{
        clearInterval(counter); //limpiar/resetear el contador
        clearInterval(counterLine); //limpiar/resetear la linea de conteo
        showResult(); //llamado a la funcion showResult
    }
}

// traer preguntas y opciones de respuestas del array
function showQuetions(index){
    const questionGame = document.querySelector(".question__game");

    //creacion de una nueva etiqueta span y div para la pregunta y la opción de respuesta, y pasando el valor usando el índice de matriz
    let queTag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let optionTag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>';
    questionGame.innerHTML = queTag; //agregar una nueva etiqueta de intervalo dentro de queTag
    optionGame.innerHTML = optionTag; //agregar una nueva etiqueta div dentro de optionTag
    
    const option = optionGame.querySelectorAll(".option");

    // establecer el atributo onclick para todas las opciones disponibless
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
// crear nuevas etiquetas div para los iconos
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//Si el usuario hace clic en la opción
function optionSelected(answer){
    btnSubmit.onclick = ()=>{
        clearInterval(counter); //limpiar contador
        clearInterval(counterLine); //limpiar linea de contador
        let userAns = answer.textContent; //obtener la opción seleccionada por el usuario
        let correcAns = questions[queCount].answer; //obtener la respuesta correcta del array
        const allOptions = optionGame.children.length; //obtener todos las opciones de respuesta
        
        if(userAns == correcAns){ //si la opción seleccionada por el usuario es igual a la respuesta correcta del array
            userScore += correctAns; //incrementar el valor de la puntuación con 1
            answer.classList.add("correct"); //poner en verde la respuesta seleccionada
            answer.insertAdjacentHTML("beforeend", tickIconTag); //agregar icono de respuesta correcta
            console.log("Respuesta correcta");
            console.log("Tu puntaje es = " + userScore);
        }else{
            userScore += incorrectAns;
            answer.classList.add("incorrect"); //poner en rojo la respuesta seleccionada
            answer.insertAdjacentHTML("beforeend", crossIconTag); //agregar icono de respuesta incorrecta
            console.log("Respuesta incorrecta");
            console.log("Tu puntaje es = " + userScore);
    
            for(i=0; i < allOptions; i++){
                if(optionGame.children[i].textContent == correcAns){ 
                    optionGame.children[i].setAttribute("class", "option correct"); //poner en verde la opcion correcta no seleccionada
                    optionGame.children[i].insertAdjacentHTML("beforeend", tickIconTag); //ppner en rojo la opcion incorrecta seleccionada
                    console.log("Respuesta correcta seleccionada automáticamente.");
                }
            }
        }
        for(i=0; i < allOptions; i++){
            optionGame.children[i].classList.add("disabled"); //una vez que el usuario selecciona una opción, deshabilita todas las opciones
        }
        btnSubmit.classList.remove("show");
        btnNext.classList.add("show"); //mostrar el siguiente botón si se dio click al de enviar
    }
}

function showResult(){
    gameQuiz.classList.remove("activeQuiz"); //ocultar juego
    resultGame.classList.add("activeResult"); //mostrar resultado
    const scoreGame = resultGame.querySelector(".score__game");
    if (userScore > 25){ // si el usuario obtuvo más de 3
        //crear una nueva etiqueta span y pasar el número de puntuación del usuario y el número total de preguntas
        let scoreTag = '<span>felicidades! 🎉, tienes <p>'+ userScore +'</p> puntos </span>';
        scoreGame.innerHTML = scoreTag; //agregar una nueva etiqueta span dentro de score__game
    }
    else{ // si el usuario obtuvo menos de 1
        let scoreTag = '<span>lo siento! 😐, solo tienes <p>'+ userScore +'</p> puntos </span>';
        scoreGame.innerHTML = scoreTag;
    }
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //cambiar el valor de timeCount con valor de time
        time--; //disminuir el valor de time
        if(time < 9){ //si el temporizador es inferior a 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; //agregar un 0 antes del valor de tiempo
        }
        if(time < 0){ //si el temporizador es menor que 0
            clearInterval(counter); //limpiar contador     
            const allOptions = optionGame.children.length; //obtener todos las opciones de respuesta
            let correcAns = questions[queCount].answer; //obtener la respuesta correcta del array
            for(i=0; i < allOptions; i++){
                if(optionGame.children[i].textContent == correcAns){
                    optionGame.children[i].setAttribute("class", "option correct"); //agregar color verde a la opción correcta
                    optionGame.children[i].insertAdjacentHTML("beforeend", tickIconTag); //agregar icono de respuesta correcta
                    console.log("Tiempo terminado: respuesta correcta seleccionada automáticamente.");
                }
            }
            for(i=0; i < allOptions; i++){
                optionGame.children[i].classList.add("disabled"); 
            }
            btnSubmit.classList.remove("show")
            btnNext.classList.add("show"); 
        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 110);
    function timer(){
        time += 1; //actualizar el valor del tiempo con 1
        timeLine.style.width = time + "px"; //aumento del ancho de timeLine con px por valor de tiempo
        if(time > 549){ //si el valor del tiempo es mayor que 549
            clearInterval(counterLine); //limpiar linea de conteo
        }
    }
}

function queCounter(index){
    //crear una nueva etiqueta de span y pasar el número de pregunta y la pregunta total
    let totalQueCounTag = '<span><p>'+ index +'</p> de <p>'+ questions.length +'</p> Preguntas</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //agregar una nueva etiqueta span dentro de bottomQuesCounter
}