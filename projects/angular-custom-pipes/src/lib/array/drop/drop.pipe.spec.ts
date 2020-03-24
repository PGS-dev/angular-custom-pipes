import { DropPipe } from './drop.pipe';

describe('DropPipe', () => {
  const pipe = new DropPipe();
  const array = [1, 2, 3];

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('drop pipe should return value [3]', () => {
    expect(pipe.transform(array, 2)).toEqual([3]);
  });

  it('drop pipe should return value [2, 3]', () => {
    expect(pipe.transform(array, 1)).toEqual([2, 3]);
  });

  it('drop pipe should return empty array', () => {
    expect(pipe.transform(array, 5)).toEqual([]);
  });

  it('drop pipe should return original array', () => {
    expect(pipe.transform(array, 0)).toEqual(array);
  });

  it('drop pipe should return original array', () => {
    expect(pipe.transform(array)).toEqual(array);
  });

  it('drop pipe should return undefined', () => {
    expect(pipe.transform([], 5)).toEqual(undefined);
  });
});
