// ten ham: isPrime
// tham so: so n
// than
// tra ve: true/false

function isPrime(n) {
    if (n <=1) {
        return false;
    }
    if (n <= 3) {
        return true;
    }
    for (let i = 2; i <= (n-1); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}


function isPrime2() {
    let a = +document.getElementById("a").value;
    let check = isPrime(a);
    let result = "";
    if (check){
        result += `${a} la so nguyen to`;
    }
    else {
        result += `${a} khong la so nguyen to`;
    }
    document.getElementById("result").innerHTML = result;
}
