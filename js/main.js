

let defaultUploaderPhoto = "images/imgUploadpng.png";
let upload = document.getElementById("upload");
let gallery = document.getElementById("gallery");
let preview = document.getElementById("preview");
let uploader = document.getElementById("uploader");

function addToGallery(src){
    let img = new Image();
    img.src = src;
    img.classList = "gallery-img";
    gallery.appendChild(img); 
} 


uploader.addEventListener("click",function(){
    upload.click();            
});



upload.addEventListener("change",function(){
    let photo = this.files;
    for (let i = 0; i<photo.length; i++){
        const reader = new FileReader(); 
    reader.addEventListener("load",function(){
        // console.log(reader.result);
        // preview.src = reader.result;
        addToGallery(reader.result);
    });
    reader.readAsDataURL(photo[i]); 
    }
             
});

