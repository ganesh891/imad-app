var express = require('express');
var morgan = require('morgan');
var path = require('path');

var Pool = require('pg').Pool;

var config ={
    user :'ganeshwizard777',
    database :'ganeshwizard777',
    host :'http://db.imad.hasura-app.io',
    port :'5432',
    password :'process.env.DB_PASSWORD',
    
};

var app = express();
app.use(morgan('combined'));

var articles = {
'articleone':{
    title: 'articleone',
    heading: 'Articleone',
    date: '4 aug 2017',
    content: `<p> 
                    This is a First content that we are served here and i am going to use a module on it 
                </p>
                <p>
                    HTML is a formal Recommendation by the World Wide Web Consortium (W3C) and is generally adhered to by the major browsers, Microsoft's Internet Explorer and Netscape's Navigator, which also provide some additional non-standard codes. The current version of HTML is HTML 4.0. However, both Internet Explorer and Netscape implement some features differently and provide non-standard extensions. Web developers using the more advanced features of HTML 4 may have to design pages for both browsers and send out the appropriate version to a user. Significant features in HTML 4 are sometimes described in general as dynamic HTML. What is sometimes referred to as HTML 5 is an extensible form of HTML called Extensible Hypertext Markup Language (XHTML).
                </p>
                
                <p>
                            The combination of BPM and microservices offers a new world of opportunity for organizations looking to digitalize their critical business processes. This section reviews the tools, techniques and technologies that are driving the ability of microservices to truly support BPM needs and explores how organizations can manage this relationship properly.
                </p>`
    
},
'articletwo' :{
    title: 'articletwo',
    heading: 'Article two',
    date: '5 aug 2017',
    content: `   <p> 
                    This is a First content that we are served here and i am going to use a module on it 
                </p>
                <p>
                    HTML is a formal Recommendation by the World Wide Web Consortium (W3C) and is generally adhered to by the major browsers, Microsoft's Internet Explorer and Netscape's Navigator, which also provide some additional non-standard codes. The current version of HTML is HTML 4.0. However, both Internet Explorer and Netscape implement some features differently and provide non-standard extensions. Web developers using the more advanced features of HTML 4 may have to design pages for both browsers and send out the appropriate version to a user. Significant features in HTML 4 are sometimes described in general as dynamic HTML. What is sometimes referred to as HTML 5 is an extensible form of HTML called Extensible Hypertext Markup Language (XHTML).
                </p>
                
                <p>
                            <b>The combination of BPM and microservices offers a new world of opportunity for organizations looking to digitalize their critical business processes. This section reviews the tools, techniques and technologies that are driving the ability of microservices to truly support BPM needs and explores how organizations can manage this relationship properly.</b>
                </p>`
    
},
'articlethree':{
    title: 'articlethree',
    heading: 'Articlethree',
    date: '20 aug 2017',
    content: `   <p> 
                    This is a First content that we are served here and i am going to use a module on it 
                </p>
                <p>
                    HTML is a formal Recommendation by the World Wide Web Consortium (W3C) and is generally adhered to by the major browsers, Microsoft's Internet Explorer and Netscape's Navigator, which also provide some additional non-standard codes. The current version of HTML is HTML 4.0. However, both Internet Explorer and Netscape implement some features differently and provide non-standard extensions. Web developers using the more advanced features of HTML 4 may have to design pages for both browsers and send out the appropriate version to a user. Significant features in HTML 4 are sometimes described in general as dynamic HTML. What is sometimes referred to as HTML 5 is an extensible form of HTML called Extensible Hypertext Markup Language (XHTML).
                </p>
                
                <p>
                           <i> The combination of BPM and microservices offers a new world of opportunity for organizations looking to digitalize their critical business processes. This section reviews the tools, techniques and technologies that are driving the ability of microservices to truly support BPM needs and explores how organizations can manage this relationship properly.</i>
                </p>`
    
},
'articlefour':{title: 'articlefour',
    heading: 'Articlefour',
    date: '24 aug 2017',
    content: `   <p> 
                    This is a First content that we are served here and i am going to use a module on it 
                </p>
                <p><b>
                    HTML is a formal Recommendation by the World Wide Web Consortium (W3C) and is generally adhered to by the major browsers, Microsoft's Internet Explorer and Netscape's Navigator, which also provide some additional non-standard codes. The current version of HTML is HTML 4.0. However, both Internet Explorer and Netscape implement some features differently and provide non-standard extensions. Web developers using the more advanced features of HTML 4 may have to design pages for both browsers and send out the appropriate version to a user. Significant features in HTML 4 are sometimes described in general as dynamic HTML. What is sometimes referred to as HTML 5 is an extensible form of HTML called Extensible Hypertext Markup Language (XHTML).</b>
                </p>
                
                <p>
                            The combination of BPM and microservices offers a new world of opportunity for organizations looking to digitalize their critical business processes. This section reviews the tools, techniques and technologies that are driving the ability of microservices to truly support BPM needs and explores how organizations can manage this relationship properly.
                </p>`
    }
};

    

 function createTemplate(data){
     var title= data.title;
     var date= data.date;
     var heading= data.heading;
     var content = data.content;
     
     
var htmlTemplate = `
<html>
    <head>
        <title>${title} </title>
        <meta name="viewport" content="width=device-width, inital-scale=1"/>
       <link href="/ui/style.css" rel="stylesheet"/>
    
        </head>
        <body>
            <div class="container">
            <div><a href='/'>Home</a>
            </div>
            <hr/>
            <h3>${heading}</h3>
            
            <div>${date}</div>
            
            <div>
              ${content}
                
            </div>
            </div>
            
            </body>
        </html>
`;
return htmlTemplate;
 }

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});




var counter=0;
app.get('/counter', function(req,res)
{
   counter =counter+1;
   res.send(counter.toString());
});


     app.get('/:articleName', function(req,res){
         var articleName = req.params.articleName;
         res.send(createTemplate(articles[articleName]));
   });



var pool = new Pool(config);
app.get('/test-db', function(req,res){
    pool.query('SELECT * FROM test', function(err,result)
    {
        if(err)
        {
            res.status(500).send(err.toString());
        }
        else
        {
           res.send(JSON.stringify(result)); 
        }
    });
});


var names=[];
app.get('/submit-name', function(req,res)
{ 
    var name= res.params.name;
    name.push(name);
    res.send(JSON.stringify(names));
    
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
