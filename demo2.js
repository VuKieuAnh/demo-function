// ham co return: xu ly logic
function demo2(a, b) {
    if (a > b) {
        return `${a} lon hon ${b}`;
    }
    else return `${a + b}`;
}

// trong th chi co 1 lenh chung ta khong can {}
// cho phep ng dung nhap vao 2 so, in ra ket qua theo yeu cau tuong ung
// tuong tac voi ng dung
function demo3() {
//     lay 2 so a va b
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
//     goi ham
    let result = demo2(a, b);
//     in ket qua vao trong the p
    document.getElementById("result").innerHTML = result;
}

