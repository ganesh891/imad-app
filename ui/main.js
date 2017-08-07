var button=document.getElementById("counter");
    
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
        request.open('GET','http://ganeshwizard777.imad.hasura-app.io/couter',true);
        request.send(null);
    };
