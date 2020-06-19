import { PowPipe } from './pow.pipe';

describe('PowPipe', () => {
  const pipe = new PowPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('pow pipe should return the result of exponent power', () => {
    expect(pipe.transform(10, 2)).toEqual(100);
  });

  it('pow pipe should return the result of exponent power', () => {
    expect(pipe.transform(2, 5)).toEqual(32);
  });
});
