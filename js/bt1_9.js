// let a = prompt('Nhập 10 số mảng a ngăn cách bởi dấu ","')
// let b = prompt('Nhập 10 số mảng b ngăn cách bởi dấu ","')
// let c = a.split(",")
// let d = b.split(",")
// const c = a.concat(b);
// alert(`c`);

let a = [];
let b = [];
for (let i = 1; i < 11; i++) {
    let number_a = +prompt(`Nhập phần tử thứ ${i} của mảng a`)
    a.push(number_a);
}
for (let i = 1; i < 11; i++) {
    let number_b = +prompt(`Nhập phần tử thứ ${i} của mảng b`)
    b.push(number_b);
}
alert(`mảng c được gộp từ a và b là: ${a.concat(b)}`);