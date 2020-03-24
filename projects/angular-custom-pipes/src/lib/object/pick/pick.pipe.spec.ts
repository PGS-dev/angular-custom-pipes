import { PickPipe } from './pick.pipe';

describe('PickPipe', () => {
  const pipe = new PickPipe();
  const value = {
    foo: 1,
    bar: 2
  };

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('pick pipe should return one object', () => {
    expect(pipe.transform(value, 'foo')).toEqual({foo: 1});
  });

  it('pick pipe should return two objects', () => {
    expect(pipe.transform(value, 'foo', 'bar')).toEqual(value);
  });
});
