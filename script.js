document.addEventListener('keydown', function(event) {
    if(event.code == 'KeyE') {
        if (window.location.href.indexOf('watch') != -1) {
            const videoId = (new URLSearchParams(window.location.search)).get('v');
            window.location.href = 'https://www.youtube.com/embed/' + videoId + '?&autoplay=1';
        } else if (window.location.href.indexOf('embed') != -1) {
            const videoId = window.location.href.split('/').at(-1);
            window.location.href = 'https://www.youtube.com/watch?v=' + videoId;
        }
    }
});
