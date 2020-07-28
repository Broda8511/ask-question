let answers = [];
const h2 = document.querySelector('h2');
const span = document.querySelector('span');

const getQuestion = document.querySelector('.addQuestion');
const resetQuestion = document.querySelector('.resetQuestion');

const getAnswer = document.querySelector('.add');
const reset = document.querySelector('.clean');
const show = document.querySelector('.showAnswer');
const getOptions = document.querySelector('.showOptions');
const resetAll = document.querySelector('.resetAll');


const addQuestion = getQuestion.addEventListener("click", function(e) {
    e.preventDefault();
    const inputQuestion = document.querySelector('.question');
    const newQuestion = inputQuestion.value;
    inputQuestion.value = "";
    
    if(newQuestion < 1) {
        alert('Napisz pytanie');

    } else {
        span.textContent = `${newQuestion}?`;
        span.classList.add('span-on');
    }
})

const clearQuestion = resetQuestion.addEventListener('click', function(e) {
    e.preventDefault();
    span.textContent = "";
    span.classList.remove('span-on');
})

const addAnswer = getAnswer.addEventListener('click', function(e) {
    e.preventDefault();
    const input = document.querySelector('.answers');
    const newAnswer = input.value;
    input.value = "";
    
    if(newAnswer < 1) {
        alert('Dodaj odpowiedź')
    } else {
        answers.push(" " + newAnswer);
    }
})

const clearAnswer = reset.addEventListener('click', function(e) {
    e.preventDefault();
    answers = [];
    h2.textContent = "";
    h2.classList.remove('h2-on');
})

const showAnswers = show.addEventListener('click', function(e) {
    e.preventDefault();
    if(answers.length == false) {
        alert('Nie wpisałeś odpowiedzi')
    } else {
        const index = Math.floor(Math.random() * answers.length);
        h2.textContent = `${answers[index]}`;
        h2.classList.add('h2-on');
    }
})

const showOptions =  getOptions.addEventListener('click', function(e) {
    e.preventDefault();
    if(answers.length == false) {
        h2.textContent = `Nie wpisałeś żadnych odpowiedzi`;
    } else {
        h2.classList.remove('h2-on');
        h2.textContent = `Wpisane odpowiedzi to: ${answers}`;
    }
})

const clearAll = resetAll.addEventListener('click', function(e) {
    e.preventDefault();
    span.textContent = "";
    span.classList.remove('span-on');
    answers = [];
    h2.textContent = "";
    h2.classList.remove('h2-on');

})