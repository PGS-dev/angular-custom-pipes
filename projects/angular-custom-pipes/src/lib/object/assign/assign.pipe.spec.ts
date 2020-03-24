import { AssignPipe } from './assign.pipe';

describe('AssignPipe', () => {
  const pipe = new AssignPipe();
  const value = {
    foo: 1,
    bar: 2
  };

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('assign pipe should return new object', () => {
    expect(pipe.transform(value, {a: 1})).toEqual(value);
  });

  it('assign pipe should return new object', () => {
    const newValue = {
      a: {
        x: 1
      },
      b: 2,
      c: 3,
    };
    const result = {
      a: 1,
      b: 2,
      c: 3,
    };

    expect(pipe.transform(newValue, {a: 1})).toEqual(result);
  });

  it('assign pipe should return new object', () => {
    const newValue = {
      a: {
        x: 1
      },
      b: 2,
      c: 3,
    };
    const result = {
      a: {
        x: 2
      },
      b: 2,
      c: 3,
    };

    expect(pipe.transform(newValue, {a: {x: 2}})).toEqual(result);
  });
});
