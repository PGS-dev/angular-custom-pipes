import { UpperFirstPipe } from './upper-first.pipe';

describe('UpperFirstPipe', () => {
  const pipe = new UpperFirstPipe();
  const value = "lorem ipsum"

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('upperFirst pipe should return string with first value uppercase', () => {
    expect(pipe.transform(value)).toEqual('Lorem ipsum');
  });

  it('upperFirst pipe should return string with first value uppercase', () => {
    expect(pipe.transform('LOREM')).toEqual('LOREM');
  });
});
