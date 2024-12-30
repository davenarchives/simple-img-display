document.getElementById('fileInput').onchange = 
function(event){
    var file = event.target.files[0];
    var image = document.getElementById('imageDisplay');
    image.src = URL.createObjectURL(file);
}
