document.addEventListener('keydown', function(event) {
    if (event.target.matches('input') || event.target.id.includes('contenteditable')) {
        return;
    }

    if(event.code == 'KeyE') {
        const videoId = window.location.href.match(/(?<=(v=))[a-zA-Z0-9_-]*/)[0];
        const currentTime = ~~document.getElementsByClassName('video-stream')[0].currentTime;
        window.location.href = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&start=' + currentTime;
    }
});
