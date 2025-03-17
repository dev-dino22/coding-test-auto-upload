function solution(numer1, denom1, numer2, denom2) {
    const sumNumer = numer1 * denom2 + numer2 * denom1;
    const sumDenom = denom1 * denom2;
    
    const sumNumerDivisors = [];
    const sumDenomDivisors = [];
    
    for (let i = 1; i <= sumNumer; i++) {
        if (sumNumer % i === 0){
            sumNumerDivisors.push(i)
        }
    }
    
    for (let i = 1; i <= sumDenom; i++) {
        if (sumDenom % i === 0){
            sumDenomDivisors.push(i)
        }
    }

    const sameDivisors = [];
    sumNumerDivisors.forEach((num) => {
        if (sumDenomDivisors.includes(num)) sameDivisors.push(num);
    });
  const maxSameDivisor = sameDivisors.length > 0 ? Math.max(...sameDivisors) : 1;
    
    const finalSumNumer = sumNumer / maxSameDivisor;
    const finalSumDenom = sumDenom / maxSameDivisor;
    return [finalSumNumer, finalSumDenom];
}
