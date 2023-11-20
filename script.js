document.addEventListener('DOMContentLoaded', function () {
    const target = document.getElementById('target');
    const gameContainer = document.getElementById('game-container');

    target.addEventListener('click', function () {
        showOption();
    });

    function moveTarget() {
        const maxX = gameContainer.clientWidth - target.clientWidth;
        const maxY = gameContainer.clientHeight - target.clientHeight;

        const newX = Math.floor(Math.random() * maxX);
        const newY = Math.floor(Math.random() * maxY);

        target.style.left = `${newX}px`;
        target.style.top = `${newY}px`;
    }

    function showOption() {
        const option = confirm('Apakah Anda ingin melanjutkan?');
    
        if (option) {
            moveTarget(); // Jika pemain ingin melanjutkan, pindahkan target lagi
        } else {
            const youtubeURL = 'https://www.youtube.com/results?search_query=mukbang+makanan+pedas';
            window.open(youtubeURL, '_blank'); // Buka situs web YouTube dalam tab atau jendela baru
        }
    }
    

    // Mulai permainan dengan memindahkan target ke lokasi awal
    moveTarget();
});

document.addEventListener('DOMContentLoaded', function () {
    const target = document.getElementById('target');
    const gameContainer = document.getElementById('game-container');

    target.addEventListener('mouseover', function () {
        moveTarget();
    });

    function moveTarget() {
        const maxX = gameContainer.clientWidth - target.clientWidth;
        const maxY = gameContainer.clientHeight - target.clientHeight;

        const newX = Math.floor(Math.random() * maxX);
        const newY = Math.floor(Math.random() * maxY);

        target.style.left = `${newX}px`;
        target.style.top = `${newY}px`;
    }
});


