function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

describe('exercício 2', () => {
  it('check if myRemove([1, 2, 3, 4], 3) returns the expected array', () => {
    expect([1, 2, 4]).toEqual(myRemove([1, 2, 3, 4], 3));
  });

  it('check if myRemove([1, 2, 3, 4], 3) doesnt return the array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  })

  it('check if myRemove([1, 2, 3, 4], 3) doesnt change', () => {
    const myList = [1, 2, 3, 4];
    myRemove(myList, 3);
    expect(myList).toEqual([1, 2, 3, 4]);
  });

  it('check if myRemove([1, 2, 3, 4], 5) return the expected array', () => {
    expect([1, 2, 3, 4]).toEqual(myRemove([1, 2, 3, 4], 5));
  });
});
