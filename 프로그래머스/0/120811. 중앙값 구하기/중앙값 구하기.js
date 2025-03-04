function solution(array) {
    const sortedArray = array.sort((a, b) => a - b);
    return array[Math.floor(sortedArray.length / 2)]
}