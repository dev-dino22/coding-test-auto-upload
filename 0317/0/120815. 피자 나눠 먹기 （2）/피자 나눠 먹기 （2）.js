function gcd(a, b) {
    let temp;
    while (b !== 0) {
        temp = b;
        b = a % b;
        a = temp;
    }
   return a;
}

function lmn(a, b) {
    return a * b / gcd(a, b);
}

function solution(n) {
    return lmn(n, 6) / 6;
}