console.log('loaded!');

var element = document.getElementById('main-text');

element.innerHTML='New Value';


var img= document.getElementById('madi');
var marginLeft=0;
function moveRight()
{
    marignLeft = marginLeft+10;
    img.style.marginleft=marginleft+px;
}
img.onclick =function()
{
    var interval= setInterval(moveRight,100);
    img.style.marginLeft='100px';
};