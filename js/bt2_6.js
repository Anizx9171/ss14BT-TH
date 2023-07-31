let arr = prompt("Nhập")
let arrd = arr.split("")
for (let i = 0;i<arrd.length;i++){
    if(arrd[i] == "-"){
        arrd[i]= "_"
    }
}
console.log(arrd.join(""));