document.addEventListener('keydown', function(event) {
    if (event.target.matches('input') || event.target.id.includes('contenteditable')) {
        return;
    }

    if(event.code == 'KeyE') {
        if (window.location.href.indexOf('watch') != -1) {
            const videoId = window.location.href.match(/(?<=(v=))[a-zA-Z0-9]+/)[0];
            const currentTime = ~~document.getElementsByClassName('video-stream')[0].currentTime;
            window.location.href = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&start=' + currentTime;
        } else if (window.location.href.indexOf('embed') != -1) {
            const videoId = window.location.href.match(/[a-zA-Z0-9]+((?=\?)|$)/)[0];
            const currentTime = ~~document.getElementsByClassName('video-stream')[0].currentTime;
            window.location.href = 'https://www.youtube.com/watch?v=' + videoId + '&t=' + currentTime;
        }
    }
});
