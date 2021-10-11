var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(pic) {
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
    fullImg.alt = "sdfsdf"
}

function closeFullImg() {
    fullImgBox.style.display = "none";
}

//Drak moode

function toggle(){
    var element = document.body;
    element.classList.toggle('dark-mode');
}