function hide(){
    document.getElementById("hidden").style.display = "none"
}

function appear1(){
   var x =  document.getElementsByClassName("hidden-text") ;
   for(let i = 0 ; i <x.length ; i++){
    x[i].style.display = "none"
   }
    document.getElementById("Gourps").style.display = "block";
}

 var clickCounter= 0;
 function hideagain1() {
 clickCounter++;
     if (clickCounter % 2 == 0){
        document.getElementById("Gourps").style.display = "none";
     }
    };

    
function appear2(){
    var x =  document.getElementsByClassName("hidden-text") ;
   for(let i = 0 ; i <x.length ; i++){
    x[i].style.display = "none"
   }
    document.getElementById("evens").style.display = "block";
}

 var clickCounter=0;
 function hideagain2() {
 clickCounter++;
     if (clickCounter % 2 == 0){
        document.getElementById("evens").style.display = "none";
     }
    };

    
function appear3(){
    var x =  document.getElementsByClassName("hidden-text") ;
   for(let i = 0 ; i <x.length ; i++){
    x[i].style.display = "none"
   }    
    document.getElementById("Photos").style.display = "block";
}

 var clickCounter=0;
 function hideagain3() {
 clickCounter++;
     if (clickCounter % 2 == 0){
        document.getElementById("Photos").style.display = "none";
     }
    };


    function myfunc(data , width){
 
        var menuoverlay =  document.createElement("div");
        menuoverlay.classList.add("my-overlay");
        document.body.appendChild(menuoverlay);
     
     
     menuoverlay.addEventListener("click" , function(){
         closedrwer();
     })
     
       var drwerrapper = document.createElement("div");
       drwerrapper.style.width = width;
       drwerrapper.className = "mydrwoer";
     
       drwerrapper.innerHTML = data ; 
       document.body.appendChild(drwerrapper);
       setTimeout(() => { drwerrapper.classList.add("open");} , 60);
     }
    
    
     
     
     function closedrwer(){
        const lastdrower =  Array.from ( document.querySelectorAll(".mydrwoer.open")).pop();
        const lastoverlay  =  Array.from ( document.querySelectorAll(".my-overlay")).pop();
        lastoverlay.remove() ;
        lastdrower.classList.remove("open");
         setTimeout(() => {
             lastdrower.remove();
         }, 1000)
     }
    