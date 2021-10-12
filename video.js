const videoPlayer = document.getElementById('videoPlayer');
const myVideo = document.getElementById('myVideo');

function stopVideo(){
    videoPlayer.style.display = 'none';
}

function playVideo(file){
    myVideo.src = file;
    videoPlayer.style.display = 'block';
}