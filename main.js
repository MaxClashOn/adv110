https://teachablemachine.withgoogle.com/models/w06Ub3Ao6/

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

