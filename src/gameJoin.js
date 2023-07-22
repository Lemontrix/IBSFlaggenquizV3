document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('play-button');
    const name = window.location.hash.slice(1);


    playButton.addEventListener('click', () => {
        window.location.href = "/src/apiImage.html#" + name;
    });

});
