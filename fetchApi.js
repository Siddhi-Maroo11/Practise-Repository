const URL= "https://catfact.ninja/fact";

//GET METHOD
const get=async() =>{
      console.log("Getting Data...")
      let response= await fetch("https://catfact.ninja/fact"); 
      console.log(response);
}

get();

const get2=async() =>{
      console.log("Getting Data...")
      let response= await fetch("https://catfact.ninja/fact"); 
      console.log(response);
      let data =await response.json();
      console.log(data);
}

get2();




