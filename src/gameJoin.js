document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('play-button');
    const hash = window.location.hash;
    const cleanhash = hash.slice(1);
    const name = cleanhash;


    playButton.addEventListener('click', () => {
        window.location.href = "/src/apiImage.html#" + name;
    });

});
