const button= document.querySelector(".btn");
const notescontainer= document.querySelector(".notes-container");
// let notes= document.querySelectorAll(".input-box");

function shownotes(){
    notescontainer.innerHTML= localStorage.getItem("notes");
}
shownotes();

function updatenotes(){
    localStorage.setItem("notes",notescontainer.innerHTML);
}

button.addEventListener("click",function(){
    let inputbox =document.createElement("p");
    let img =document.createElement("img");
    inputbox.className="input-box";
    inputbox.setAttribute("contenteditable","true");
    img.src="images/delete.png";
notescontainer.appendChild(inputbox).appendChild(img);
});

notescontainer.addEventListener('click',function(e){
   if(e.target.tagName==="IMG") {
    e.target.parentElement.remove();
    updatenotes();
   }
   else if(e.target.tagName==="P"){
    let notes=document.querySelectorAll(".input-box");
    notes.forEach(function(nt){
        nt.onkeyup= function(){
            updatenotes();
        }
    });
   }
});

document.addEventListener("keydown", function(e){
    if(e.key==="Enter"){
        document.execCommand("insertLineBreak");
        e.preventDefault();
    }
});