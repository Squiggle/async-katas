
describe('Promise object', () => {
  it('`Promise` is a global function', function() {
    expect(typeof Promise).toBe('???');
  });
});

describe('Promises can resolve or reject', () => {
  it('Can resolve immediately', () => {
    throw 'Not implemented';
  });
  it('Can reject immediately', () => {
    throw 'Not implemented';
  });
  it('Can remain unresolved', () => {
    throw 'Not implemented';
  });
});

describe('Promises have static methods for handling collections', () => {
  it('Promise.all', () => {
    throw 'Not implemented';
  });
  it('Promise.race', () => {
    throw 'Not implemented';
  });
});

describe('Promises can be chained', () => {
  it('will call `then` after resolving', () => {

  });
  it('will call `catch` after rejecting', () => {

  });
  it('will timeout this test if it doesn\'t resolve', () => {

  });
});

describe('Promises can be chained asynchronously', () => {
  // as above but with `async`
});