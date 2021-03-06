import isUndefined from '.';

describe('Tests isUndefined rule', () => {
  it('Should return true for `undefined` value', () => {
    expect(isUndefined(undefined)).toBe(true);
    expect(isUndefined()).toBe(true);
  });

  it.each([
    null,
    NaN,
    false,
    true,
    Object,
    Array(0),
    '',
    ' ',
    0,
    1,
    '0',
    '1',
    () => {},
  ])('Should return false for %s value', v => {
    expect(isUndefined(v)).toBe(false);
  });

  it('Should expose negativeForm property', () => {
    expect(isUndefined.negativeForm).toBe('isNotUndefined');
  });
});
