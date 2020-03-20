import { IndexOfPipe } from './index-of.pipe';

describe('IndexOfPipe', () => {
  const pipe = new IndexOfPipe();
  const array = [1, 2, 3];

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('index-of pipe should return value -1', () => {
    expect(pipe.transform(array, 0)).toEqual(-1);
  });

  it('index-of pipe should return 0', () => {
    expect(pipe.transform(array, 1)).toEqual(0);
  });

  it('index-of pipe should return -1', () => {
    expect(pipe.transform(array, -1)).toEqual(-1);
  });

  it('index-of pipe should return -1', () => {
    expect(pipe.transform(array, 5)).toEqual(-1);
  });
});
