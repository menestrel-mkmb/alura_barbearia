const buttonNames = ['.tecla_pom', '.tecla_clap', '.tecla_tim', '.tecla_puff', '.tecla_splash', '.tecla_toim', '.tecla_psh', '.tecla_tic', '.tecla_tom'];
const soundNames = ['#som_tecla_pom', '#som_tecla_clap', '#som_tecla_tim', '#som_tecla_puff', '#som_tecla_splash', '#som_tecla_toim', '#som_tecla_psh', '#som_tecla_tic', '#som_tecla_tom'];

function tocaSom(i){
    document.querySelector(buttonNames[i]);
    document.querySelector(soundNames[i]).play();
}