function solution(slice, n) {
    if(n % slice !== 0) return Math.floor(n / slice) + 1;
    return n / slice;
}