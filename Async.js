console.log("one");
console.log("two");

setTimeout(() =>{
    console.log("Hello World !");
},1000);

console.log("third");
console.log("four");
console.log("five");
console.log("six");



//callbacks hell
function getData(dataId,getNextData){
    // 2s
    setTimeout(()=>{
        console.log(dataId);
        if(getNextData){
            getNextData();
        }
    },2000);
}

getData(1,()=>{
    getData(2,()=>{
        getData(3,()=>{
            getData(4);
        })
    })
})



// Promises
/*let promise=new Promise((resolve,reject)=>{
    console.log("I am a promise");
})

console.log(promise);*/


const getPromise=()=>{
    return new Promise((resolve,reject)=>{
           console.log("I am a Promise");
           //resolve("succesfully");
           reject("error occured")
    });
}

let promise=getPromise();
promise.then((res)=>{
     console.log("promise is fullfilled",res);
});


let promises=getPromise();
promises.catch((err)=>{
    console.log("promise is not fullfilled   ",err);
});


function async1(){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
             console.log("data 1");
             resolve("success");
         },4000);
    });
}


function async2(){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
             console.log("data 2");
             resolve("success");
         },4000);
    });
}


let p1=async1();
p1.then((res)=>{
     console.log("fetching data 1",res);
     let p2=async2();
     p2.then((res)=>{
           console.log("fetching data 2",res);
     });
});


// async-await

async function hello(){
    console.log("Hello World !");
}

hello();
console.log(hello);



function getData(data){
    return new Promise((resolve,reject)=>{
           setTimeout(()=>{
                console.log("data is",data);
                resolve(200);
           },4000);
    });
}

async function getAllData(){
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
}

getAllData();


