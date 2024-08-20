const mobile_menu_button = document.getElementById("mobile-menu-button");
const mobile_menu = document.getElementById("mobile-menu");

console.log("hello");

mobile_menu_button.addEventListener("click",()=>{
 
    mobile_menu.classList.toggle("hidden");
    

})