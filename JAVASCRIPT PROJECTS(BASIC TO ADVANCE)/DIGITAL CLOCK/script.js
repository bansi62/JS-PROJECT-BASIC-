let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

 setInterval(() => {
    const currenttime = new Date();
    hrs.innerHTML = currenttime.getHours();
    min.innerHTML = currenttime.getMinutes();
    sec.innerHTML = currenttime.getSeconds();
},1000);







