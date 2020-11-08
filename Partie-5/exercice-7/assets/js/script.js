let text = document.querySelector('body');

window.onscroll = scrollText;

function scrollText() {
    let sizeText = window.scrollY * .01;

    if (sizeText <= 4) {
        sizeText += 1;
    } else {
        (sizeText >= 5)
        sizeText = 5;
    }

    let fontTextSize = sizeText + 'em';
    text.style.fontSize = fontTextSize;

}