import { IsEmptyPipe } from './is-empty.pipe';

describe('IsEmptyPipe', () => {
  const pipe = new IsEmptyPipe();
  const array = [1, 2, 3];

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('is-empty pipe should return false', () => {
    expect(pipe.transform(array)).toBeFalsy();
  });

  it('is-empty pipe should return true', () => {
    expect(pipe.transform([])).toBeTruthy();
  });

  it('is-empty pipe should return null', () => {
    expect(pipe.transform(null)).toEqual(null);
  });
});
