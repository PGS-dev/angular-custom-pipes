import { InvertPipe } from './invert.pipe';

describe('InvertPipe', () => {
  const pipe = new InvertPipe();
  const value = {
    foo: 1,
    bar: 2
  };

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('invert pipe should return inverted array', () => {
    expect(pipe.transform(value)).toEqual({1: 'foo', 2: 'bar'});
  });
});
