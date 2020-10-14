function myFunction() {
  var x = document.getElementById("active")
  var menu=document.getElementsByClassName("fa fa-bars");
  
  if (x.style.display === "none") {
    document.getElementById("fa fa-bars").className="fa fa-times";
    x.style.display = "block";

  } else {
    document.getElementById("fa fa-bars").className="fa fa-bars";
    x.style.display = "none";
  }
}

window.addEventListener("scroll",function(){
var header=document.querySelector("header");
header.classList.toggle("sticky",window.scrollY>0); 
header.style.background="black";
}); 

function Agumnasiou(){
  function pageRedirect() {
    window.location.href = "course.html";
  }    
}
