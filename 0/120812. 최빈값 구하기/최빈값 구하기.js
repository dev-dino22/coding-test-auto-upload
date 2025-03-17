function solution(array) {
    const counter = {};
    const setArray = [...new Set(array)];
    // counter.num 이랑 counter[num]이랑 뭔차이길래..
    setArray.forEach(num => {
        const numAmount = array.filter((elem) => elem === num).length;
        counter[num] = numAmount});
    
    let maxAmount = 0;
    for (let amount of Object.values(counter)) {
        if(amount > maxAmount) maxAmount = amount
    }

    const result = [];
    for(let number of Object.keys(counter)) {
        if(counter[number] === maxAmount) result.push(Number(number));
    };

    if(result.length > 1) return -1;
    return result[0];
}
