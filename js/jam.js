
var joueuses = document.querySelectorAll('.joueuse');
var blockerOnJam = document.querySelector('.joueuses-en-jam>.container-blocker');
var jammerOnJam = document.querySelector('.joueuses-en-jam>.container-jammer');
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
        if(!isBlockerFull()){
            blockerOnJam.append(joueuse);
            joueuse.classList.add("blocker");
            joueuse.isOnJam = true;
            joueuse.role = "blocker";
        }else{
            if(!isJammerFull()){
                jammerOnJam.append(joueuse);
                joueuse.classList.add("jammer");
                joueuse.isOnJam = true;
                joueuse.role = "jammer";
            }
        }    
    }else{
        printMessage("Nombres maximum de joueuses atteint");
    }
    
}

function removeJoueuseFromJam(joueuse){  
    listeJoueuses.append(joueuse);
    joueuse.isOnJam = false;  
}

function isJamFull(){
    if(isBlockerFull() && isJammerFull()){
        return true;
    }else{
        return false;
    }
}

function isBlockerFull(){
    if(blockerOnJam.childElementCount >= 4){
        return true;
    }else {
        return false;
    }
}

function isJammerFull(){
    if(jammerOnJam.childElementCount >= 1){
        return true;
    }else {
        return false;
    }
}

function printMessage(message){
    affichageMessageDom.innerText = message;
    containerMessageDom.classList.add('is-show');
}