import { KeysPipe } from './keys.pipe';

describe('KeysPipe', () => {
  const pipe = new KeysPipe();
  const value = {
    foo: 1,
    bar: 2
  };

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('keys pipe should return array with keys collection', () => {
    expect(pipe.transform(value)).toEqual(['foo', 'bar']);
  });
});
