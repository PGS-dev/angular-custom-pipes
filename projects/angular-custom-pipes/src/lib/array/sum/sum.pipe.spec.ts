import { SumPipe } from './sum.pipe';

describe('RemoveFalsyPipe', () => {
  const pipe = new SumPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('Sum pipe should return sum value', () => {
    const array = [3, 2, 5, 6];
    expect(pipe.transform(array)).toEqual(16);
  });
});
