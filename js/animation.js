//rotate
function animateLogo() {
    const logo = document.getElementById('book-logo');
    logo.style.transition = 'transform 0.5s';
    logo.style.transform = 'rotate(360deg)';

    setTimeout(() => {
        logo.style.transition = 'none';
        logo.style.transform = 'rotate(0deg)';
        setTimeout(() => {
            logo.style.transition = 'transform 0.5s';
        });
    }, 500);
}

window.onload = function () {
    const logo = document.getElementById('book-logo');

    logo.addEventListener('click', animateLogo);
};

document.addEventListener("DOMContentLoaded", function () {

    var nameInput = document.getElementById("name");

    nameInput.addEventListener("keypress", function (event) {
        var isValidChar = /^[a-zA-Z]$/i.test(event.key);

        if (!isValidChar) {
            event.preventDefault();
        }
    });
});

//mouseover
const homeHeader = document.querySelector('#home h1');

homeHeader.addEventListener('mouseover', () => {
    homeHeader.style.transform = 'scale(1.1)';
    homeHeader.style.transition = 'transform 0.3s ease-in-out';
});

homeHeader.addEventListener('mouseleave', () => {
    homeHeader.style.transform = 'scale(1)';
    homeHeader.style.transition = 'transform 0.3s ease-in-out';
});

const homeHeader2 = document.querySelector('#home p');

homeHeader2.addEventListener('mouseenter', () => {
    homeHeader2.style.transform = 'scale(1.1)';
    homeHeader2.style.transition = 'transform 0.3s ease-in-out';
});

homeHeader2.addEventListener('mouseleave', () => {
    homeHeader2.style.transform = 'scale(1)';
    homeHeader2.style.transition = 'transform 0.3s ease-in-out';
});

