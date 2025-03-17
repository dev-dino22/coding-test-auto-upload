function solution(money) {
    const quantity = Math.floor(money / 5500); 
    const dust = money % 5500;
    return [quantity ,dust]
}