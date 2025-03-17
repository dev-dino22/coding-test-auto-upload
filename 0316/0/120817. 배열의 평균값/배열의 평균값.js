function solution(numbers) {
    return numbers.reduce((cur, acc) => acc + cur) / numbers.length
}