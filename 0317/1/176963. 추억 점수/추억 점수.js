function solution(name, yearning, photo) {
  const object = {};
  name.forEach((item, index) => {
    object[item] = yearning[index];
  });
  const results = [];
  photo.forEach((nameArray) => {
    let result = 0;
    nameArray.forEach((name) => {
      if (object[name]) result += Number(object[name]);
    });
    results.push(result);
  });
    return results;
}