function myFunction() {
   
    var S = document.getElementById("snackbar");
  
   
    S.className = "show";
  
    setTimeout(function(){
       S.className = S.className.replace("show", ""); }, 3000);
  }