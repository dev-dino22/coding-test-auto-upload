function solution(s) {
    const splited = s.split(' ');
    const numberArray = splited.map((string) => Number(string.trim())).sort((a,b) => a - b);
    return [numberArray[0], numberArray[(numberArray.length - 1)]].join(' ');
}