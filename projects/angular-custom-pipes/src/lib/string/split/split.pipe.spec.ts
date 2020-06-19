import { SplitPipe } from './split.pipe';

describe('SplitPipe', () => {
  const pipe = new SplitPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('split pipe should return array of strings', () => {
    expect(pipe.transform('Lorem-ipsum-solid', '-')).toEqual(['Lorem', 'ipsum', 'solid']);
  });

  it('split pipe should return array of strings', () => {
    expect(pipe.transform('Lorem ipsum solid', ' ')).toEqual(['Lorem', 'ipsum', 'solid']);
  });

  it('split pipe should return array of strings', () => {
    expect(pipe.transform('Lorem ipsum solid')).toEqual(['L', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm', ' ', 's', 'o', 'l', 'i', 'd']);
  });
});
