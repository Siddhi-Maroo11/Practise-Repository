// DOM Manipulation

// getelement by id
let element=document.getElementById("myId");
console.log(element);
console.dir(element);

let element1=document.getElementById("siddhi");
console.log(element1);
console.dir(element1);


// get element by class
let element2=document.getElementsByClassName("myClass");
console.log(element2);
console.dir(element2);

let element4=document.getElementsByClassName("myClass");
console.log(element4);
console.dir(element4);



// get element by tags
let element3=document.getElementsByTagName("h1");
console.log(element3);
console.dir(element3);

let element5=document.getElementsByTagName("p");
console.log(element5);
console.dir(element5);


// QuerySelector
let element6=document.querySelector("#myId");
console.log(element6);
console.dir(element6);

//Query Selector for class
let element7=document.querySelectorAll(".myClass");
console.log(element7);
console.dir(element7);



let myClass=document.querySelector(".myClass");
console.log(myClass.firstChild);
console.log(myClass.lastChild);
//console.log(body.lastChild);


let heading=document.getElementById("heading");
console.log(heading.innerText);
console.log(heading.innerHTmL);
console.log(heading.textContent);
console.log(heading.tagName);


// practise question
let h2=document.getElementsByTagName("h2")[0];  // we can use query selector also and if id is given then in also
console.log(h2.innerText);
h2.innerText=h2.innerText + " from Apna College"; // concatenation
console.log(h2.innerText);


// attributes
let h1=document.querySelector("h1");
h1.setAttribute("id","heading");
console.log(h1.getAttribute("id"));


// practise question
let newbutton=document.createElement("button");
newbutton.innerText="Click me";
newbutton.style.backgroundColor="red";
newbutton.style.color="white";

let body=document.querySelector("body");
body.prepend(newbutton);


function add(a,b){
    return a+b;
}

let ans=add(2,3);
console.log(typeof());
