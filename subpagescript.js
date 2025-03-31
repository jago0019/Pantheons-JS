const hamburgerButton = document.getElementById('hamburger-button');
const hamburgerContent = document.getElementById('hamburger-content');
const norseBanner = document.getElementById('norse-banner');
const greekBanner = document.getElementById('greek-banner');
const egyptianBanner = document.getElementById('egyptian-banner');

document.querySelectorAll('.god').forEach(god => {
    god.addEventListener('click', () => {
        localStorage.removeItem("godname");
        localStorage.removeItem("godimage");
        localStorage.removeItem("godinfo");
        localStorage.removeItem("godparagraph");

        let godName = god.querySelector('.god-details h3').innerHTML;
        let godImg = god.querySelector('.god-image img').src.split('/').pop();
        let godPara = god.querySelector('.god-image img').dataset.paragraph;
        let godInfo = god.querySelector('.god-details h4').innerHTML;


        if (godName) {
            localStorage.setItem("godname", godName);
            localStorage.setItem("godimage", godImg);
            localStorage.setItem("godinfo", godInfo);
            localStorage.setItem("godparagraph", godPara);
            console.log('saved name: ', localStorage.getItem("godname"));
            console.log('saved image: ', localStorage.getItem("godimage"));
            console.log('saved tagline: ', localStorage.getItem("godinfo"));
            console.log('saved info: ', localStorage.getItem("godparagraph"));

            window.location.href = '/goddetails.html';
        } else {
            console.log('No name found inside this god element.');
        }

    });
});

hamburgerButton.addEventListener('click', showMenu);

function showMenu() {
    if (hamburgerContent.style.display == 'none' || hamburgerContent.style.display == '') {
        hamburgerContent.style.display = 'flex';
    } else {
        hamburgerContent.style.display = 'none';
    }
    
}

if (norseBanner) {
    norseBanner.style.backgroundImage = "url('img/norse-gods.png')";
}

if (greekBanner) {
    greekBanner.style.backgroundImage = "url('img/greekgods.jpeg')";
}

if (egyptianBanner) {
    egyptianBanner.style.backgroundImage = "url('img/egyptian-gods.webp')";
}