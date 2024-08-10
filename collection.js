var sidenavbar=document.querySelector(".side-navbar")

function sidenavshow()
{
    sidenavbar.style.left="0"
}
function sidenavclose()
{
    sidenavbar.style.left="-60%"
}

var productcontainer=document.getElementById("products")
var search=document.getElementById("search")
var productlist=productcontainer.querySelectorAll("div")

search.addEventListener("keyup",function(event){
    textentered=event.target.value.toUpperCase()
    for(i=0;i<productlist.length;i++)
    {
        var productname=productlist[i].querySelector("p").textContent
        if(productname.toUpperCase().indexOf(textentered)<0)
        {
            productlist[i].style.display="none"
        }
        else
        {
            productlist[i].style.display="block"
        }
    }
})