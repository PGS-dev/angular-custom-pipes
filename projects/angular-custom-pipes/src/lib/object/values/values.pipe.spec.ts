import { ValuesPipe } from './values.pipe';

describe('ValuesPipe', () => {
  const pipe = new ValuesPipe();
  const value = {
    foo: 1,
    bar: 2
  };

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('values pipe should return array of values', () => {
    expect(pipe.transform(value)).toEqual([1, 2]);
  });
});
