
    var button=document.getElementById("counter");
    var counter=0;
    button.onclick = function()
    {
        
        var request = new XmlHttpRequest();
        
        request.onreadystatechange = fuction()
        {
            if(request.readystate===XmlHttpRequest.Done){
                if (request.status===200)
                {
                    var counter = request.responseText;
                    var span = document.getElementById('count');
                    span.innerHtml = counter.toString();
                }
            }
        }
        request.open('Get','http://coco98.imad.hasura-app.io/couter',true);
        request.send(null);
    };