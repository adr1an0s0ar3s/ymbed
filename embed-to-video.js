document.addEventListener('keydown', function(event) {
    if(event.code == 'KeyE') {
        const videoId = window.location.href.match(/[a-zA-Z0-9_-]*((?=\?)|$)/)[0];
        const currentTime = ~~document.getElementsByClassName('video-stream')[0].currentTime;
        window.location.href = 'https://www.youtube.com/watch?v=' + videoId + '&t=' + currentTime;
    }
});
