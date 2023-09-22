window.addEventListener("DOMContentLoaded", domLoaded);

// When the DOM has finished loading, add the event listeners.
function domLoaded() {
   F_in.addEventListener("input",()=>{
      C_in.value="";
   })
   C_in.addEventListener("input",()=>{
      F_in.value="";
   })
   convertButton.addEventListener("click",(p)=>{
      p.preventDefault();

      if(F_in.value !== ''){
         const F = parseFloat(F_in.value);
         const C = convertFtoC(F);
         C_in.value = C; 

         displayIcon(F);
      }
      
      else if (C_in.value !== '') {
         const C = parseFloat(C_in.value);
         const F = convertCtoF(C);
         F_in.value = F; 

         displayIcon(F);  
     }
 })
   // TODO: Use addEventListener() to register a click event handler for the convert button.
   // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#add_a_simple_listener
   // Add event listeners to handle clearing the box that WAS NOT clicked,
   // e.g., the element C_in listens for 'input', with a callback fn to
   // execute after that event does happen. 
   // You don't send arguments to the event handler function.
   // So, if you want the event handler to call another function that
   // DOES take arguments, you can send that other function as a callback.
   // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#event_listener_with_anonymous_function
   // Here is an example of anonymous event handler fn that calls alert with an argument:
   // document.getElementById("weatherIcon").addEventListener("click", function() {alert("You clicked the icon.")})

}
// TODO: (Part of the above is to write the functions to be executed when the event handlers are invoked.)

function convertCtoF(C) {
   const F = C * 9/5 + 32;
   return F;
}

function convertFtoC(F) {
   const C = (F - 32) * 5/9
   return C;
}

function displayIcon(F){
   //alert("Gets here");
   if(F>=200 || F<=-200){
      //TODO Display DEAD
      //alert("Gets here");
      document.getElementById("weatherIcon").src="./images/dead.png";
   }
   else if(F<=32){
      //TODO Display COLD
      document.getElementById("weatherIcon").src="./images/cold.png";
   }
   else if(F>=90){
      //TODO Display HOT
      document.getElementById("weatherIcon").src="./images/hot.png";
   }
   else if(F>32 && F<90){
      //TODO Display COOL
      document.getElementById("weatherIcon").src="./images/cool.png";

   }
}
// TODO: write a fn that can be called with every temp conversion
// to display the correct weather icon.
// Based on degrees Fahrenheit:
// 32 or less, but above -200: cold
// 90 or more, but below 200: hot
// between hot and cold: cool
// 200 or more, -200 or less: dead
// both input fields are blank: C-F
