import { Env } from "./env";
console.log(`M365:${process.env.M365_USERNAME}`);
const a=`${process.env.M365_USERNAME}`
// console.log(`M365B:${Env.username}`);
if(a == 'helly1-test'){
    console.log("yes")
}else if(a == 'helly2-test'){
    console.log("yes2")
}else{
    console.log("no")
}