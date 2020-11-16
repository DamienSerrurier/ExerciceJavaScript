let fables = document.querySelectorAll('a');

fables.forEach(fable => {
    fable.addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelector(fable.getAttribute('href')).scrollIntoView({
            behavior: "smooth"
        });
    })
})