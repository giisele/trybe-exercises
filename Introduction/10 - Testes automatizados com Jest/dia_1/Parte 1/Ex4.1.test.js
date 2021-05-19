// o retorno de FizzBuzz!
function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

describe('ex4', () => {
  it(`check if myFizzBuzz(30) returns 'fizzbuzz'`, () => {
    expect(myFizzBuzz(30)).toEqual('fizzbuzz');
  });

  it(`check if myFizzBuzz(9) returns 'fizz'`, () => {
    expect(myFizzBuzz(9)).toEqual('fizz');
  });

  it(`check if myFizzBuzz(20) returns 'buzz'`, () => {
    expect(myFizzBuzz(20)).toEqual('buzz');
  });

  it(`check if myFizzBuzz(8) returns 8`, () => {
    expect(myFizzBuzz(8)).toEqual(8);
  });

  it(`check if myFizzBuzz('a'), i.e. not a number, return false`, () => {
    expect(myFizzBuzz('a')).toEqual(false);
  });
});
