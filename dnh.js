
// categorie realisation: evenement , decoratipon

let realiser= document.querySelector('.realo')
realiser.addEventListener('click', (e)=>{
e.preventDefault()
let evenement = document.getElementById(even).value
let decoration = document.getElementById(deco).value
let choix
if(choix== evenement){
    document.getElementById("lien").innerHTML = realo
}else if (choix == decoration){
 document.getElementById("lion").innerHTML= readec
}else{

}
})

  function toggleContactOptions() {
    const menu = document.getElementById("contactOptions");
    //menu.style.display = menu.style.display === "block" ? "none" : "block";
    if (menu.style.display === "block") {
        menu.style.display = "none";
      } else {
        menu.style.display = "block";
      }
      
  }
  // Fermer le menu si on clique en dehors
  window.onclick = function(event) {
    const menu = document.getElementById("contactOptions");
    if (!event.target.matches('.contact-menu button')) {
      menu.style.display = "none";
    }
  }

  
