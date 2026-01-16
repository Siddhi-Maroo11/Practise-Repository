// let mySet= new Set("siddhi");
// for(i of mySet){
//     console.log(i);
// }

// let myset= new Set([1,2,2,2,3,4,5,6,6]);
// for(i of myset){
//     console.log(i);
// }

// console.log("\n");

 let arr=[1,2,3,4,"siddhi"];
 let set=new Set(arr);
// for(i of set){
//     console.log(i);
// }

// console.log("\n");

// set.add(1);
// set.add("Siddhi");

// set.delete(2);


// for(i of set){
//     console.log(i);
// }


// let k=set.size;
// console.log(k);

// console.log(set.has(3));
// set.clear();

// for(i of set){
//     console.log(i);
// }



// map
let myMap=new Map([
    ["name","Siddhi"],
    ["age",20],
    ["city","pune"]

]);

myMap.set("state","rajastan");
console.log(myMap.get("name"));

for (let [key,value] of myMap){
    console.log(key,value);
}

console.log(myMap.has("city"));
console.log(myMap.delete("city"));


console.log(typeof(myMap));
console.log(typeof(set));

console.log(set.keys());
console.log(set.values());
console.log(set.entries());

console.log(typeof(set.keys()));
console.log(typeof(set.values()));
console.log(typeof(set.entries()));



