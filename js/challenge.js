const counterContainer = document.getElementById("counter");
let counter = parseInt(counterContainer.innerText);
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const likeButton = document.getElementById("heart");
const likesContainer = document.querySelector('.likes');
const pause = document.getElementById("pause");
const form = document.getElementById("comment-form");
const submit = document.getElementById("submit");

// initial timer settings
let paused = false;

let startTimer = setInterval(incrementTimer, 1000);

// start timer
function incrementTimer() {
    if (!paused) {
        counter++;
        counterContainer.innerText = counter.toString();
    }
}

// minus button
minus.addEventListener('click', e => {
    counter--;
    counterContainer.innerText = counter;
});

// plus button
plus.addEventListener('click', e => {
    counter++;
    counterContainer.innerText = counter;
});

// like functionality
let likes = {};
likeButton.addEventListener('click', e => {
    const liTag = document.createElement('li');

    if (likes[counter]) {
        likes[counter] += 1;
        likesContainer.children[likesContainer.children.length - 1].innerText = `${counter} has been liked ${likes[counter]} times.`;
    } else {
        likes[counter] = 1;
        liTag.innerText = `${counter} has been liked 1  time.`
        likesContainer.appendChild(liTag);
    }
});

// pause button functionality
pause.addEventListener('click', e => {
    paused = !paused;
    if (paused) {
        minus.disabled = true;
        plus.disabled = true;
        likeButton.disabled = true;
        pause.innerText = "resume";
    } else {
        minus.disabled = false;
        plus.disabled = false;
        likeButton.disabled = false;
        pause.innerText = "pause";
    }
});


// comment functionality
submit.addEventListener("click", appendComment);

function appendComment(event) {
    event.preventDefault();
    let list = document.getElementById("list");
    let p = document.createElement("p");
    list.appendChild(p);
    let content = document.getElementById("comment-input");
    p.innerHTML = `${content.value}`;
    content.value = "";
}