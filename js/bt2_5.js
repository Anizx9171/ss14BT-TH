let str = +prompt("Nhập chuỗi a")
let arra = str.split
let str_2 = +prompt("Nhập chuỗi b")
let arrb = str_2.split
let flag = true
for (let i = 0; i <= str.length; i++) {
    if(arra[i] != arrb[i]){
        flag = false
        break;
    }
}
if (flag){
    alert("hai chuỗi giống nhau")
}else{
    alert("Hai chuỗi khác nhau")
}
