let string = prompt("Nhập một dãy số cách nhau bởi dấu ','")
let count = 0;
let arr = string.split(",")
for (const value of arr) {
    if (value < 0){
        count++
    }
}
console.log(`số nguyên âm trong dãy là ${count} số`);