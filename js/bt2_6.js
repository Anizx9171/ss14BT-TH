let arr = prompt("Nhập")
for (let i = 0;i<arr.length;i++){
    if(arr[i] == "-"){
        arr[i]= "_"
    }
}
console.log(arr);