console.log('Loaded!');


var element = document.getElementById("Main-Text");

element.innerHTML='New value';

//move the image

var img= document.getElementById('modi');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+5;
    img.style.marginLeft = marginLeft+px;
    }
    
    img.onclick =function(){
        var interval= setinterval(moveRight,50);
    };