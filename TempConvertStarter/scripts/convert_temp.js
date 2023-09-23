window.addEventListener("DOMContentLoaded", domLoaded);

// When the DOM has finished loading, add the event listeners.
function domLoaded() {
   F_in.addEventListener("input",()=>{
      C_in.value="";
   })
   C_in.addEventListener("input",()=>{
      F_in.value="";
   })
   convertButton.addEventListener("click",(b)=>{

      //If there is a error message from previous atttempt, this clears it
      document.getElementById("message").textContent = "";

      b.preventDefault();

      //Creates error message and changes text of error message to displayed message below
   

      if(F_in.value != ''){
         const F = parseFloat(F_in.value);

         //Cancels out with error message if not valid input
      

        //Sends # to F to C
         const C = convertFtoC(F);
         C_in.value = C; 

         displayIcon(F);
         return; 
      }
      
      else if (C_in.value != '') {
         const C = parseFloat(C_in.value);

         //Cancels out with error message if not valid input

        //Sends # to C to F
         const F = convertCtoF(C);
         F_in.value = F; 

         displayIcon(F);
         return;  
     }

     //casts error message and changes icon
     else {
         document.getElementById("message").textContent = "Enter a temperature to convert,";
         document.getElementById("weatherIcon").src="./images/C-F.png";
         return;
   }
 })
}


function convertCtoF(C) {
   const F = C * 9/5 + 32;
   return F;
}

function convertFtoC(F) {
   const C = (F - 32) * 5/9
   return C;
}



function displayIcon(F){
   if(F>=200 || F<=-200){
      //Display DEAD
      document.getElementById("weatherIcon").src="./images/dead.png";
   }
   else if(F<=32){
      //Display COLD
      document.getElementById("weatherIcon").src="./images/cold.png";
   }
   else if(F>=90){
      //Display HOT
      document.getElementById("weatherIcon").src="./images/hot.png";
   }
   else if(F>32 && F<90){
      //Display COOL
      document.getElementById("weatherIcon").src="./images/cool.png";

   }
}
