let audio= document.getElementById("audio");
let progressbar= document.getElementById("progress");
let ctrlicon= document.getElementById("playctrl");

audio.onloadedmetadata = function(){
    progressbar.max = audio.duration;
    progressbar.value = audio.currentTime;
};

function ctrl(){
    if(ctrlicon.classList.contains("fa-pause")){
        audio.pause();
        ctrlicon.classList.remove("fa-pause");
        ctrlicon.classList.add("fa-play");

    }
    else{
        audio.play();
        ctrlicon.classList.add("fa-pause");
        ctrlicon.classList.remove("fa-play");

    }
};

  if(audio.play()){
    setInterval(() => {
      progressbar.value = audio.currentTime;
   },500);
};

progressbar.onchange =function(){
audio.play();
audio.currentTime = progressbar.value;

ctrlicon.classList.add("fa-pause");
ctrlicon.classList.remove("fa-play");
}