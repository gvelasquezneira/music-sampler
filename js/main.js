
let poster = document.querySelector('#poster');
let strokes = document.querySelector('#StrokesConcert');
let ep = document.querySelector('#EP');
let concert = document.querySelector('#concert1');

let audioElements = document.querySelectorAll('audio');

audioElements.forEach(audio => {
    audio.style.display = 'none';
});

function stopAndHideOtherPlayers(currentPlayer) {
    audioElements.forEach(function(player) {
        if (player !== currentPlayer) {
            player.pause();
            player.currentTime = 0;
            player.style.display = 'none';
        }
    });
}

function toggleAudio(audioId) {
    let audio = document.querySelector(audioId);
    
    stopAndHideOtherPlayers(audio);

    if (audio.style.display === 'none') {
        audio.style.display = 'block';
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0;
        audio.style.display = 'none';
    }
}

function handleImageClick(event) {
    let clickedImageId = event.target.id;
    
    switch (clickedImageId) {
        case 'poster':
            toggleAudio('#lastNite');
            break;
        case 'StrokesConcert':
            toggleAudio('#adultsAreTalking');
            break;
        case 'EP':
            toggleAudio('#reptilia');
            break;
        case 'concert1':
            toggleAudio('#OdeToTheMets');
            break;
        default:
            console.log('Unrecognized image clicked');
    }
}

poster.addEventListener('click', handleImageClick);
strokes.addEventListener('click', handleImageClick);
ep.addEventListener('click', handleImageClick);
concert.addEventListener('click', handleImageClick);

audioElements.forEach(function(audio) {
    audio.addEventListener('play', function() {
        stopAndHideOtherPlayers(this);
        this.style.display = 'block';
    });
});