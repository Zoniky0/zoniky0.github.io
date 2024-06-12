document.querySelectorAll('.game-tile').forEach(tile => {
    tile.addEventListener('mouseover', () => {
        const info = tile.getAttribute('data-info');
        tile.querySelector('.info').textContent = info;
    });
});

