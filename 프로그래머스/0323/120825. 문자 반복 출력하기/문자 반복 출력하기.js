function solution(my_string, n) {
    return my_string.split('').map((string) => string.repeat(n)).join('');
}