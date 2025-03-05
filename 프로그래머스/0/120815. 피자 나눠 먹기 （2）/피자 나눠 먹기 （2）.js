function solution(n) {
     let tryNumber = 6;
    
    const setPizza = [];
    
    for(let i = 0; i<=100; i++) {
        setPizza.push(tryNumber);
        tryNumber += 6;
    }

    const index = setPizza.findIndex((num) => num % n === 0);
    return index + 1;
}
