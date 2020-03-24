import { MaxPipe } from './max.pipe';

describe('MaxPipe', () => {
  const pipe = new MaxPipe();
  const value = [1, 3, 4];

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('max pipe should return maximum value of array', () => {
    expect(pipe.transform(value)).toEqual(4);
  });
});
