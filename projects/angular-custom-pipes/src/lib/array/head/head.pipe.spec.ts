import { HeadPipe } from './head.pipe';

describe('HeadPipe', () => {
  const pipe = new HeadPipe();
  const array = [1, 2, 3];

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('head pipe should return value 1', () => {
    expect(pipe.transform(array)).toEqual(1);
  });

  it('head pipe should return undefined', () => {
    expect(pipe.transform([])).toEqual(undefined);
  });
});
