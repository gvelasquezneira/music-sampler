let audio = document.querySelector('#audio');
let poster = document.querySelector('.poster');

poster.style.display = 'none';

poster.onclick = () => {
    if (audio.style.display === 'none') {
        audio.style.display = 'block';
    } else {
        audio.style.display = 'none';
    }
}
