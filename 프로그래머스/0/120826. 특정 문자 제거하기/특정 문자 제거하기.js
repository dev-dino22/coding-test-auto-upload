function solution(my_string, letter) {
    return my_string.split('').filter((str) => str !== letter).join('');
}