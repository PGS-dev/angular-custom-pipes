import { LastPipe } from './last.pipe';

describe('LastPipe', () => {
  const pipe = new LastPipe();
  const array = ['a', 'b', 'c'];

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('last pipe should return last value', () => {
    expect(pipe.transform(array)).toEqual('c');
  });

  it('last pipe should return undefined', () => {
    expect(pipe.transform([])).toEqual(undefined);
  });
});
