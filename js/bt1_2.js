let number = prompt("Nhập 10 số bạn muốn ngăn cách bởi dấu phẩy")
let arr = number.split(",")
let max= arr[0];
for (let i = 1; i < arr.length; i++) {
    if(max < +arr[i]) {
        max = arr[i]
    }

}
alert(`Số lớn nhất trong dãy bạn vừa nhập là ${max}`);