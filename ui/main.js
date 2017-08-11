console.log('loaded!');

var element = document.getElementById('main-text');

element.innerHTML='New Value';


var img= document.getElementById('madi');

var marginLeft = 0;
function moveRight()
{
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function(){
    var interval= setInterval(moveRight, 50);
    
};


//counter

var button = document.getElementById('counter');
var counter =0;
button.onclick =function()
{
    counter= counter+1;
var span = document.getElementById('count');
span.innerHTML = counter.toString();
};


//submit a button

/*var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');

submit.onclick = function()
{
    var names =['name1','name2','name3','name4'];
    var list ='';
    for(var i=0; i<names.length;i++)
    {
        list += '<li>' + names[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
};
*/


var submit = document.getElementById('submit_btn');
submit.onclick = function()
{
     var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        if (request.readyState === XMLHttpRequest.DONE){
            
            if(request.status===200)
            {
                var names =request.responseText;
                names = JSON.parse(names);
                var list = '';
              for(var i=0; i<names.length; i++)
                     {
                        list += '<li>' + names[i] + '</li>';
                     }
           var ul = document.getElementById('namelist');
           ul.innerHTML = list;
            }
        }
    };
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
   request.open('GET','http://ganeshwizard777.imad.hasura-app.io/submit-name?name=' + name, true);
    request.send(null);
    
 };

