function solution(my_string, n) {
    const splitedString = my_string.split('');
    const answer = splitedString.map((string) => string.repeat(n)).join('');
    return answer;
}