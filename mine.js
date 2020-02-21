var category="general"
var country="eg"
var term;
var dropdown=document.getElementsByClassName("dropdown-item")
var rowdata=document.getElementById("rowdata")
var navlink=document.getElementsByClassName("nav-link")
var searchinp=document.getElementById("search")
var btnsearch=document.getElementById("btn-search")
(btnsearch)
(searchinp)
var temp=[];

btnsearch.onclick=function()
{
    term=searchinp.value;
    (term)
    searching()
}


for(var i=0;i<navlink.length ;i++)
    {
        navlink[i].onclick=function(e)
        {
         category=e.target.innerHTML
            ajax()   
        }
        
    }
for(var i=0;i<dropdown.length ;i++)
    {
        dropdown[i].onclick=function(e)
        {
         country=e.target.id
            ajax()   
        }
        
    }

function ajax()
{
var req;
    if(window.XMLHttpRequest)
        {
         req=new XMLHttpRequest();   
        }
    else //Ie5,Ie6
        {
            req=new ActiveXObject("Microsoft.XMLHTTP");
        }
var url=`https://newsapi.org/v2/top-headlines?country=`+country+`&category=`+category+`&apiKey=e49823ae80464a1ab2a0c272a7164260`
req.open("GET",url)
req.onreadystatechange=function()
{
    
    if(req.readyState==4)
        {
             temp= JSON.parse(req.response);
             temp= temp.articles;
            display()
        }
}

req.send()
    }

ajax()
function display()
{
    let imageStakeHolder="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Solid_white.svg/768px-Solid_white.svg.png";
    var col="";
    for(var i=0;i<temp.length;i++)
        {
            if(temp[i].urlToImage == null){
                temp[i].urlToImage= imageStakeHolder;
            }            
            col+=`<div class="col-md-4 border-dark mb-2 my-1 myclass bg-light">
                 <a href="`+temp[i].url+`" target="_blank"><img class="img-fluid" src="`+temp[i].urlToImage+`"/></a>
                   <h3>`+temp[i].title+`</h3>
                   </div>
                   `
        }
    rowdata.innerHTML=col;
}

function searching()
{
    var req;
    if(window.XMLHttpRequest)
        {
         req=new XMLHttpRequest();   
        }
    else //Ie5,Ie6
        {
            req=new ActiveXObject("Microsoft.XMLHTTP");
        }

    
    var url1=`https://newsapi.org/v2/everything?q=`+term+`&from=2019-08-20&sortBy=publishedAt&apiKey=e49823ae80464a1ab2a0c272a7164260`


req.open("GET",url1)
req.onreadystatechange=function()
{
    
    if(req.readyState==4)
        {
             temp= JSON.parse(req.response);
             temp= temp.articles;
            display()
        }
}

req.send()
}


