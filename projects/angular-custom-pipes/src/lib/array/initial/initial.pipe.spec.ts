import { InitialPipe } from './initial.pipe';

describe('InitialPipe', () => {
  const pipe = new InitialPipe();
  const array = [{a: 'Car'}, 2, {b: 'Bus'}];

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('initial pipe should return array without last element', () => {
    const result: any[] = [{a: 'Car'}, 2];

    expect(pipe.transform(array)).toEqual(result);
  });

  it('initial pipe should return empty array', () => {
    expect(pipe.transform([])).toEqual([]);
  });
});
