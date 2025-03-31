const hamburgerButton = document.getElementById('hamburger-button');
const hamburgerContent = document.getElementById('hamburger-content');
const randomButton = document.getElementById('random-button');

const norseButton = document.getElementById('first-button');
const greekButton = document.getElementById('second-button');
const egyptianButton = document.getElementById('third-button');

hamburgerButton.addEventListener('click', showMenu);
randomButton.addEventListener('click', navigateToRandomPage);
norseButton.addEventListener('click', () => navigateToSub(1));
greekButton.addEventListener('click', () => navigateToSub(2));
egyptianButton.addEventListener('click', () => navigateToSub(3));


function showMenu() {
    if (hamburgerContent.style.display == 'none' || hamburgerContent.style.display == '') {
        hamburgerContent.style.display = 'flex';
    } else {
        hamburgerContent.style.display = 'none';
    }
    
}

function navigateToRandomPage() {
    let pageInt = getRandomInt(3);
    console.log('Should navigate to: ', pageInt);
    console.log(pageInt);
    switch (pageInt) {
        case 0:
            window.location.href = '/norse.html';
            return;
        case 1:
            window.location.href = '/greek.html';
            return;
        default: 
            window.location.href = '/egyptian.html';
            return;
    }
}

function getRandomInt(max) {
    let randInt = Math.floor(Math.random() * max);
    console.log('Random int: ', randInt);
    return randInt;
}

function navigateToSub(int) {
    switch (int) {
        case 1:
            window.location.href = '/norse.html';
            return;
        case 2:
            window.location.href = '/greek.html';
            return;
        default: 
            window.location.href = '/egyptian.html';
            return;
    }
}