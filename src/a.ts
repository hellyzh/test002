import { Env } from "./env";
console.log(`M365:${process.env.AZURE_ACCOUNT_NAME}`);
const a=`${process.env.AZURE_ACCOUNT_NAME}`
// console.log(`M365B:${Env.username}`);
if(a == 'helly1'){
    console.log("yes")
}else if(a == 'helly2'){
    console.log("yes2")
}else{
    console.log("no")
}