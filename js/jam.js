
var joueuses = document.querySelectorAll('.joueuse');
var jamEnCoursDom = document.querySelector('.joueuses-en-jam');
var listeJoueuses = document.querySelector('.liste-joueuses');
var affichageMessageDom = document.querySelector('.message');
var containerMessageDom = document.querySelector('#message-container');
var closeMessageIcon = document.querySelector('#message-container .fas');

joueuses.forEach(function(joueuse) {
    joueuse.isOnJam = false;
    joueuse.addEventListener("click", function() {
        if(!joueuse.isOnJam){
            addJoueuseToJam(joueuse);
        }else{
            removeJoueuseFromJam(joueuse);
        }   
    });
});



function addJoueuseToJam(joueuse){
    if(!isJamFull()){
        jamEnCoursDom.append(joueuse);
        joueuse.isOnJam = true;
    }else{
        printMessage("Nombres maximum de joueuses atteint");
    }
    
}

function removeJoueuseFromJam(joueuse){  
    console.log("Remove");
    listeJoueuses.append(joueuse);   
}

function isJamFull(){
    if(jamEnCoursDom.childNodes.length > 5){
        return true;
    }else{
        return false;
    }
}

function printMessage(message){
    affichageMessageDom.innerText = message;
    containerMessageDom.classList.add('is-show');
}