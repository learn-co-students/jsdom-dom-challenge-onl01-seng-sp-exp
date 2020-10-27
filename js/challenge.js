let counterContainer = document.getElementById('counter');
let counter = parseInt(counterContainer.innerText);
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const likeButton = document.getElementById("heart");
const likesContainer = document.querySelector('.likes');
const pause = document.getElementById("pause");

let pause = false;

let startTimer = setInterval(incrementTimer, 1000);

function incrementTimer(){
    if(!pause){
        counter++;
        counterContainer.innerText = counter.toString();
    }
}

minus.addEventListener('click', e => {
    counter--;
    counterContainer.innerText = counter;
});

plus.addEventListener('click', e => {
    counter++;
    counterContainer.innerText = counter;
});







