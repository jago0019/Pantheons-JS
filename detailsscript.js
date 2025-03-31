const hamburgerButton = document.getElementById('hamburger-button');
const hamburgerContent = document.getElementById('hamburger-content');
const godHeader = document.querySelector('.god-header h1');
const godImageSrc = document.querySelector('.god-image img');
const godSub = document.querySelector('.god-info h3');
const godP = document.querySelector('.god-info p');

const godName = localStorage.getItem("godname");
const godImage = localStorage.getItem("godimage");
const godInfo = localStorage.getItem("godinfo");
const godParagraph = localStorage.getItem("godparagraph");

hamburgerButton.addEventListener('click', showMenu);

function showMenu() {
    if (hamburgerContent.style.display == 'none' || hamburgerContent.style.display == '') {
        hamburgerContent.style.display = 'flex';
    } else {
        hamburgerContent.style.display = 'none';
    }
    
}

console.log('Info: ', godParagraph);

godHeader.innerHTML = godName;
godSub.innerHTML = godInfo;
godP.innerHTML = godParagraph;
godImageSrc.src = "img/" + godImage;