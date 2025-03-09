// ㅋㅋㅋㅋㅋㅋㅋ웃긴 1차 풀이
// 먼가 최소공배수 이용한 어쩌구일거같은데 머리 안돌아가서 냅다 피자 왕창 생성해버리기...

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



// 일단 리팩토링!
// 일단 필요한만큼만 피자 만드는 걸로 하긴했는데 먼가 쫌 그른가

function solution(n) {
    let pizzaSlice = 6;
    const setPizza = [];

    while (pizzaSlice % n !== 0) {
        setPizza.push(pizzaSlice);
        pizzaSlice += 6;
    }
    setPizza.push(pizzaSlice);

    return setPizza.length;
}


// 다른 사람들은 어떻게 풀었나?
// "유클리드 호제법"! 학습해보고 직접 이걸 적용해 풀어보기
