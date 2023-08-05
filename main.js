webcam.set({
    height:350,
    width:300,
    image_format:jpeg,
    jpeg_quality:100,
})
cam=document.getElementById('Webcam')
Webcam.attach(cam)
function Snapshot(){
 Webcam.snap(function(ws){
    document.getElementById('Result').innerHTML='<img id="CM" src="'+ws+'"> '
 })
}
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/mbYYUxi4w/model.json',modelLoaded())

function modelLoaded(){
    console.log("model has been loaded ")

}