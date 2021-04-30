const assert = require('assert');

const verify = (password) => {
  if (password === null) return false;
  if (password.length <= 8) return false; 
  if (password.toLowerCase() === password) return false;
  if (password.toUpperCase() === password) return false;
  if (/[a-z0-9]/.test(password)) return false;
  return true;
}

assert.strictEqual(verify(null), false, 'Error: password should not be null');
assert.strictEqual(verify('Abc3'), false, 'Error: password should be larger than 8 chars');
assert.strictEqual(verify('abcdefgh3'), false, 'Error: password should have one uppercase letter at least');
assert.strictEqual(verify('ABCEDFGH3'), false, 'Error: password should have one lowercase letter at least');
assert.strictEqual(verify('ABCEDFghi'), false, 'Error: password should have one number at least');
