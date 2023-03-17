import { Env } from "./env";
console.log(`M365:${process.env.M365_USERNAME}`);
const a=`${process.env.M365_USERNAME}`
// console.log(`M365B:${Env.username}`);
if(a == 'abc$abc2'){
    console.log("yes")
}else{
    console.log("no")
}