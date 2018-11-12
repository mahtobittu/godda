
var elem = document.getElementById('hamburger');
var line = document.getElementsByClassName('line');
var ham  = document.getElementsByClassName('ham')
var ham1 = document.getElementsByClassName('ak');


 elem.addEventListener("click",myFunction,false);
 ham1[0].addEventListener("click",myFunction,false);
 ham1[1].addEventListener("click",myFunction,false);
 ham1[2].addEventListener("click",myFunction,false);

 function myFunction(){
   line[0].classList.toggle('line1');
   line[1].classList.toggle('line2');
   line[2].classList.toggle('line3'); 
   ham[0].classList.toggle('hamdisplay');    
 }


