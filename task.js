const find =require("./comandos/find");

const action = process.argv[2];

if(!action) {
   console.log("olvidaste introducir la accion a ejecutar");
    return;
}
switch(action) {
    case "find":{
        const title = process.argv[3];

        if (!title) {
         console.log("olvidaste introducier el titulo");
        break;
 }
const exist = find(title);

console.log("titulo:",title);
console.log("existe:",exist);
}

    default:
        console.log("accion no definida")
        break;
}