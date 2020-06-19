import { ConcatPipe } from './concat.pipe';

describe('ConcatPipe', () => {
  const pipe = new ConcatPipe();
  const firstValue = 'Lorem';
  const secondValue = 'Ipsum';

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('concat pipe should return concatenated string', () => {
    expect(pipe.transform(firstValue, ' ', secondValue)).toEqual('Lorem Ipsum');
  });

  it('concat pipe should return concatenated string', () => {
    expect(pipe.transform(firstValue, '', secondValue)).toEqual('LoremIpsum');
  });

  it('concat pipe should return concatenated string', () => {
    expect(pipe.transform(firstValue, '.', secondValue)).toEqual('Lorem.Ipsum');
  });
});
