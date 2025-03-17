function solution(num1, num2) {
    const numbers = [num1, num2];
    return numbers.reduce((acc, cur) => acc + cur);
}