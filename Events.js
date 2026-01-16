// onclick event
/*let button=document.querySelector("#button");
button.onclick=function(){
    console.log("button is clicked");  // overwritten
}

button.onclick=function(){
    console.log("button is clicked second times");
}

button.addEventListener("click",function(vevent){
    console.log("button is clicked third time");
});


button.addEventListener("click",function(vevent){
    console.log("button is clicked fourth time");
});




// onmouseover event
button.onmouseover=function(){
    button.style.color="red";
    console.log("mouseover done");
}*/


// event.target and event.currentTarget

let Div=document.querySelector("#div");
let Ul=document.querySelector("#ul");
let Li=document.querySelector("#li");




Div.addEventListener("click",function(event){
    console.log("Div is clicked");
    console.log("target:", event.target);
    console.log("currentTarget:", event.currentTarget);
});

Ul.addEventListener("click", (event) => {
    console.log("UL clicked");
    console.log("target:", event.target);
    console.log("currentTarget:", event.currentTarget);
});


Li.addEventListener("click", (event) => {
    console.log("LI clicked");
    event.stopPropagation();
});
