let images = ['./images/01.jpg', './images/02.jpg', './images/03.jpg'];
let img = document.querySelector('img');
let count = 0;
function next() {
    count++;
    if(count >= images.length){
        count = 0;
        img.src = images[count];
    }else{
        img.src = images[count];
    }
}
function previous() {
    count--;
    if(count < 0){
        count = images.length - 1;
        img.src = images[count];
    }else{
        img.src = images[count];
    }
}