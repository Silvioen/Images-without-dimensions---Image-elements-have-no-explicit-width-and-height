function ready(fn){let d=document;(d.readyState=='loading')?d.addEventListener('DOMContentLoaded',fn):fn();}

function addDimensionsOfImages(){
    const images = document.getElementsByTagName("img");
    for (let i=0; i<images.length; i++) {
        images[i].setAttribute("width", images[i].width);
        images[i].setAttribute("height", images[i].height);
    };
}

ready(function(){
    addDimensionsOfImages();
});