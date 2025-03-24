function solution(num_list) {
    const resultArray = [];
    num_list.forEach((num) => resultArray.unshift(num));
    
    return resultArray;
}