const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

describe('ex5',  () => {
  it('checks if objects are identicals', () => {
    expect(obj1).toEqual(obj2);
  });

  it('checks if objects are not identicals', () => {
    expect(obj1).not.toEqual(obj3);
  });

  it('checks if objects are not identicals', () => {
    expect(obj2).not.toEqual(obj3);
  });
});
