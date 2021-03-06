
var joueuses = document.querySelectorAll('.joueuse');
var blockerOnJam = document.querySelector('.joueuses-en-jam>.container-blocker');
var jammerOnJam = document.querySelector('.joueuses-en-jam>.container-jammer');
var listeJoueuses = document.querySelector('.liste-joueuses');
var affichageMessageDom = document.querySelector('.message');
var containerMessageDom = document.querySelector('#message-container');
var closeMessageIcon = document.querySelector('#message-container .fas');
var btnValidation = document.querySelector('#btn-validation');

localStorage.setItem('ligne', 'Tom');



console.log(localStorage.getItem('monChat'));

joueuses.forEach(function(joueuse) {
    joueuse.isOnJam = false;
    joueuse.derbyName = joueuse.children[0].innerText;
    joueuse.addEventListener("click", function() {
        if(!joueuse.isOnJam){
            addJoueuseToJam(joueuse);
        }else{
            removeJoueuseFromJam(joueuse);
        }   
    });
});

btnValidation.addEventListener('click',_ =>{
    saveJoueuseOnJam();
});


function saveJoueuseOnJam(){
    let playerOnJam = new Array();
    joueuses.forEach(joueuse => {
        if(joueuse.isOnJam){
            playerOnJam.push({"joueuse":joueuse});
        }
    });

    localStorage.setItem("players",JSON.stringify(playerOnJam));
    console.log(JSON.parse(localStorage.getItem("players")));
}


function addJoueuseToJam(joueuse){
    if(!isJamFull()){
        if(!isBlockerFull()){
            blockerOnJam.append(joueuse);
            joueuse.classList.add("blocker");
            joueuse.isOnJam = true;
            joueuse.role = "blocker";

            if(isJammerFull()){
                toggleValidate("show");
            }
        }else{
            if(!isJammerFull()){
                jammerOnJam.append(joueuse);
                joueuse.classList.add("jammer");
                joueuse.isOnJam = true;
                joueuse.role = "jammer";
                toggleValidate("show");
            }
        }    
    }else{
        printMessage("Nombres maximum de joueuses atteint");
    }
    
    
}

function removeJoueuseFromJam(joueuse){
    if(isJamFull){
        toggleValidate("hide");
    }
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

function toggleValidate(statut){
    if(statut === 'hide'){
        btnValidation.classList.remove("is-show");
        btnValidation.disabled = true;
    }else{
        btnValidation.classList.add("is-show");
        btnValidation.disabled = false;
    }

   
}