import { LowerFirstPipe } from './lower-first.pipe';

describe('LowerFirstPipe', () => {
  const pipe = new LowerFirstPipe();
  const value = "Lorem ipsum"

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('lowerFirst pipe should return string with first value lowercase', () => {
    expect(pipe.transform(value)).toEqual('lorem ipsum');
  });

  it('lowerFirst pipe should return string with first value lowercase', () => {
    expect(pipe.transform('LOREM')).toEqual('lOREM');
  });
});
