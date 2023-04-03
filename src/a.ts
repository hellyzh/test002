import { Env } from "./env";
console.log(`M365:${process.env.AZURE_ACCOUNT_NAME}`);
const a=`${process.env.AZURE_ACCOUNT_NAME}`
// console.log(`M365B:${Env.username}`);
if(a.includes('helly1')){
    console.log("yes1")
}else if(a.includes('helly2')){
    console.log("yes2")
}else if(a.includes('helly3')){
    console.log("yes3")
}else if(a.includes('helly4')){
    console.log("yes4")
}else{
    console.log("no")
}