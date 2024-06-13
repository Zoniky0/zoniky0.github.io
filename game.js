document.getElementById('fullscreen-btn').addEventListener('click', function() {
    const gameFrame = document.getElementById('game-frame');
    if (gameFrame.requestFullscreen) {
        gameFrame.requestFullscreen();
    } else if (gameFrame.mozRequestFullScreen) { // Firefox
        gameFrame.mozRequestFullScreen();
    } else if (gameFrame.webkitRequestFullscreen) { // Chrome, Safari and Opera
        gameFrame.webkitRequestFullscreen();
    } else if (gameFrame.msRequestFullscreen) { // IE/Edge
        gameFrame.msRequestFullscreen();
    }
});
