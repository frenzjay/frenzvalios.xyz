document.addEventListener('DOMContentLoaded', function () {
    const extractButton = document.getElementById('extractButton');
    const urlInput = document.getElementById('urlInput');
    const audioPlayer = document.getElementById('audioPlayer');

    extractButton.addEventListener('click', async function () {
        const url = urlInput.value;
        if (url) {
            try {
                const response = await fetch(`https://frenzvalios.xyz/api/youtube?url=${url}`);
                const data = await response.json();
                if (data.audio_url) {
                    audioPlayer.src = data.audio_url;
                    audioPlayer.play();
                }
            } catch (error) {
                console.error('Error extracting audio:', error);
            }
        }
    });
});
