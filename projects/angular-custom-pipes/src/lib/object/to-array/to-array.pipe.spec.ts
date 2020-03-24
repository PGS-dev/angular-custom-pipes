import { ToArrayPipe } from './to-array.pipe';

describe('ToArrayPipe', () => {
  const pipe = new ToArrayPipe();
  const value = {
    foo: 1,
    bar: 2
  };

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('toArray pipe should return array with values', () => {
    expect(pipe.transform(value)).toEqual([1, 2]);
  });

  it('toArray pipe should return array with values', () => {
    const newValue = {
      a: {
        type: 'Car'
      },
      b: {
        type: 'Bus'
      },
      c: {
        type: 'Bicycle'
      }
    };
    const result = [
      {
        type: 'Car'
      },
      {
        type: 'Bus'
      },
      {
        type: 'Bicycle'
      },
    ]

    expect(pipe.transform(newValue)).toEqual(result);
  });
});
