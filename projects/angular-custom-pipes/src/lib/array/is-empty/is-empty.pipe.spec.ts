import { IsEmptyPipe } from './is-empty.pipe';

describe('IsEmptyPipe', () => {
  const pipe = new IsEmptyPipe();
  const array = [1, 2, 3];

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('isEmpty pipe should return false', () => {
    expect(pipe.transform(array)).toBeFalsy();
  });

  it('isEmpty pipe should return true', () => {
    expect(pipe.transform([])).toBeTruthy();
  });

  it('isEmpty pipe should return null', () => {
    expect(pipe.transform(null)).toEqual(false);
  });
});
