console.log('Script carregado'); // Verifica se o script é carregado

const audio = document.getElementById('audio'); 
const playPauseButton = document.getElementById('play-pause');
const trackButtons = document.querySelectorAll('.track');
const seekBar = document.getElementById('seek-bar');
const currentTimeDisplay = document.getElementById('current-time');
const durationDisplay = document.getElementById('duration');

let isPlaying = false;

// Função para formatar o tempo
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Atualiza a duração e o tempo atual
audio.addEventListener('loadedmetadata', () => {
    durationDisplay.textContent = formatTime(audio.duration);
});

audio.addEventListener('timeupdate', () => {
    currentTimeDisplay.textContent = formatTime(audio.currentTime);
    seekBar.value = (audio.currentTime / audio.duration) * 100;
});

// Muda o áudio quando um botão de faixa é clicado
trackButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log('Botão da faixa clicado:', button.dataset.src); // Log quando um botão é clicado
        audio.src = button.dataset.src;
        audio.play();
        playPauseButton.textContent = 'Pause';
        isPlaying = true;
    });
});

// Controla o play/pause
playPauseButton.addEventListener('click', () => {
    console.log('Botão Play/Pause clicado'); // Log ao clicar no botão Play/Pause
    if (isPlaying) {
        audio.pause();
        playPauseButton.textContent = 'Play';
    } else {
        audio.play();
        playPauseButton.textContent = 'Pause';
    }
    isPlaying = !isPlaying;
});

// Pular 10 segundos
document.getElementById('jump').addEventListener('click', () => {
    audio.currentTime += 10;
});

// Atualiza a posição do áudio ao mover o seek bar
seekBar.addEventListener('input', () => {
    audio.currentTime = (seekBar.value / 100) * audio.duration;
});
