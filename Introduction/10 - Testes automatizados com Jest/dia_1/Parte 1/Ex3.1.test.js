function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

describe('exercício 3', () => {
  it('check if myRemoveWithoutCopy([1, 2, 3, 4], 3) returns the expected array', () => {
    expect([1, 2, 4]).toEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3));
  });

  it('check if myRemoveWithoutCopy([1, 2, 3, 4], 3) doesnt return the array [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  })

  it('check if myRemoveWithoutCopy([1, 2, 3, 4], 3) doesnt change', () => {
    const myList = [1, 2, 3, 4];
    myRemoveWithoutCopy(myList, 3);
    expect(myList).not.toEqual([1, 2, 3, 4]);
  });

  it('check if myRemoveWithoutCopy([1, 2, 3, 4], 5) return the expected array', () => {
    expect([1, 2, 3, 4]).toEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5));
  });
});
