const error = document.querySelector('.error');
error.style.display="none";
const warning = document.querySelector('.warning');
warning.style.display="none";
const email = document.querySelector('.email');
const submit = document.querySelector('.arrow')
submit.addEventListener("click", ()=> {
    const index = email.value.indexOf('@');
    if(index==-1){
       error.style.display="block";
       warning.style.display="block";
         email.style.border="1.2px solid hsl(0, 93%, 68%)";
       
    }
    else {
      error.style.display="none";
      warning.style.display="none";
      email.style.border="solid hsl(0, 36%, 70%) 0.5px";
    }
 

});