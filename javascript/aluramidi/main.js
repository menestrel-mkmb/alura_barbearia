const buttonNames = document.querySelectorAll('.tecla');
const soundNames = document.querySelectorAll('.sounds');

function tocaSom(i){
    buttonNames[i].onclick = function(){
        return soundNames[i].play();
    };
}

for(var index = 0; index < buttonNames.length; index ++){
    tocaSom(index);
}