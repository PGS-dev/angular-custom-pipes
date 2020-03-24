import { OmitPipe } from './omit.pipe'

describe('OmitPipe', () => {
  const pipe = new OmitPipe();
  const value = {
    foo: 1,
    bar: 2
  };

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('pick pipe should return one object', () => {
    expect(pipe.transform(value, 'foo')).toEqual({bar: 2});
  });

  it('pick pipe should return one object', () => {
    expect(pipe.transform(value, 'bar')).toEqual({foo: 1});
  });

  it('pick pipe should return empty object', () => {
    expect(pipe.transform(value, 'foo', 'bar')).toEqual({});
  });
});
