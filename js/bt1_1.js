let number = prompt("Nhập vào 10 số nguyên được ngăn cách bởi dấu phẩy");
let arr = number.split(",")
console.log(arr);
for (let i = 0; i<arr.length;i++){
        if (+arr[i] > 10){
            console.log(arr[i])
        }
}