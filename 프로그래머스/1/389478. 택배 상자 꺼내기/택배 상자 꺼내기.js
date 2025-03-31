function solution(n, w, num) {
    // 일단 몇 층이 쌓일지를 구하고
    // 층으로 나누어서 이중 배열로 저장 [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15]]
    // 0부터 +2 인덱스의 배열은 오름차순 정렬
    // 1부터 +2 인덱스의 배열은 내림차순 정렬
    // [[1,2,3,4,5],[10,9,8,7,6],[11,12,13,14,15]]
    // n/w 까지의 열을 키로 가진 객체를 만듦(값은 빈 배열)
    // [[1,2,3,4,5],[10,9,8,7,6],[11,12,13,14,15]]의 배열을 돌면서 각 열에 모든 배열의 해당 열-1 index를 가진 애들을 순서대로 저장해줌.
    // 배열의 length를 return 해줌.
    
    // n을 돌면서 
    
  const numbers = Array(n).fill().map((_, i) => i + 1);
  const layered = [];

  // 1. 층당 w개씩 나눔
  for (let i = 0; i < n; i += w) {
    layered.push(numbers.slice(i, i + w));
  }

  // 2. 짝수층 → 방향, 홀수층 ← 방향
  const sortedLayered = layered.map((array, index) => {
    return index % 2 === 0 ? array : array.reverse();
  });
    
  const foundIndex1 = sortedLayered.findIndex((arr) => arr.includes(num));

  const sortedLayered2 = sortedLayered.slice(foundIndex1)
const foundIndex2 = sortedLayered2[0].findIndex((number) => number === num)

    const resultArray = sortedLayered2
  .map((arr, i) => {
    const actualRow = foundIndex1 + i;
    const correctedCol = actualRow % 2 === 0 ? foundIndex2 : w - 1 - foundIndex2;
    return arr[correctedCol];
  })
  .filter((v) => v !== undefined); // Boolean 말고 명확하게


    return resultArray.length
    
  //실행한 결괏값 [[1,2,3],[6,5,4],[7,8,9],[12,11,10],[13]]이 기댓값 4과 다릅니다.

}


