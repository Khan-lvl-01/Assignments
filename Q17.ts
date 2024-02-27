let guests: string[] = ["Khan", "Butt", "Jutt"];
for (let i = 0; i < guests.length; i++) {
    console.log(`Hello ${guests[i]}, you are invited to dinner tonight.`);
}
const lastIndex: number = guests.length - 1;
const lastEntry: string = guests[(guests.length) - 1];
console.log(`Sorry guests, ${guests.pop()} cannot make it to the dinner tonight.`);
guests.push("Lone");
for (let i = 0; i < guests.length; i++) {
    console.log(`Hello ${guests[i]}, you are invited to dinner tonight.`);
}
console.log(`Hi guests, we have got more company because i have found a bigger dinner table .`);
guests.unshift("Sheikh");
guests.push("Pathan");
let middleIndex:number = Math.floor(guests.length / 2);
guests.splice(middleIndex,0, "Araeen");
for (let i = 0; i < guests.length; i++) {
    console.log(`Hello ${guests[i]}, you are invited to dinner tonight.`);
}
console.log(`Hi guests, i guess my table won't be arriving in time for the dinner tonight. So, i can only invite two guests. Sorry.`);
for (let i = (guests.length-3); i>=0 ; i--) {
    console.log(`Hello ${guests.pop()}, sorry i cannot invite you to dinner tonight. Maybe another time.`);
}
for (let i = 0; i < guests.length; i++) {
    console.log(`Hello ${guests[i]}, you are invited to dinner tonight.`);
}
for (let i = (guests.length-1); i>=0 ; i--) {
    guests.pop();
    }
console.log(guests);


