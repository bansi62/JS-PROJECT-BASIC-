const input= document.getElementById("input");
const listcontainer= document.getElementById("list-cont");

input.addEventListener("keydown", function(e){
      if (e.key === "Enter"){
       e.preventDefault();
       addtask();
      } 
   
});

function addtask(){
    const task= input.value.trim();
    if(task===''){
        alert("write something");
        return;
    }
    else{
        let list= document.createElement("li");
        list.textContent= task;
        listcontainer.appendChild(list);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        list.appendChild(span);
    }
    input.value=  ""  ;
    savedata();
}


 
  

listcontainer.addEventListener("click",function(e){
   if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked")
    savedata();
   }
   else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
    savedata();
   }
    
})

function savedata(){
    localStorage.setItem("data", listcontainer.innerHTML);
   
}

function showtask(){
    listcontainer.innerHTML= localStorage.getItem("data");
   
}

showtask();

