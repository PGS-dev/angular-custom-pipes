import { MinPipe } from './min.pipe';

describe('MinPipe', () => {
  const pipe = new MinPipe();
  const value = [3, 1, 4];

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('max pipe should return minimum value of array', () => {
    expect(pipe.transform(value)).toEqual(1);
  });
});
