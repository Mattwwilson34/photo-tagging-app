import between from '../between';

describe('Between Util function', () => {
  it('Returns true if number is between min and max otherwise return false', () => {
    const result1 = between(5, 1, 10);
    const result2 = between(9, 1, 1);
    expect(result1).toBe(true);
    expect(result2).toBe(false);
  });
});
