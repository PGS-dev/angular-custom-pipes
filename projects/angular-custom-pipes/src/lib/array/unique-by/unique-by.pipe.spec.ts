import { UniqueByPipe } from './unique-by.pipe';

describe('UniqueByPipe', () => {
  const pipe = new UniqueByPipe();
  const array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }];

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('uniqueBy pipe should return array with unique values', () => {
    expect(pipe.transform(array, 'x')).toEqual([{ 'x': 1 }, { 'x': 2 }]);
  });

  it('uniqueBy pipe should return array with 3 items', () => {
    pipe.transform(array, 'x');

    expect(array.length).toEqual(3);
  });
});
