import { Env } from "./env";
if(`${process.env.M365_USERNAME}` == 'abc$abc'){
    console.log("correct")
}
console.log(`M365:${process.env.M365_USERNAME}`);
console.log(`M365B:${Env.username}`);