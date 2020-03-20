import { JoinPipe } from './join.pipe';

describe('JoinPipe', () => {
  const pipe = new JoinPipe();
  const array = ['a', 'b', 'c'];

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('join pipe should return string separated by plus', () => {
    expect(pipe.transform(array , ' + ')).toEqual('a + b + c');
  });

  it('join pipe should return string separated by tilde', () => {
    expect(pipe.transform(array , '~')).toEqual('a~b~c');
  });

  it('join pipe should return empty string', () => {
    expect(pipe.transform([] , '~')).toEqual('');
  });
});
