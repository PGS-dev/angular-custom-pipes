import { IncludesPipe } from './includes.pipe';

describe('IncludesPipe', () => {
  const pipe = new IncludesPipe();
  const value = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('includes pipe should return true', () => {
    expect(pipe.transform(value, 'simply')).toBe(true);
  });

  it('includes pipe should return false', () => {
    expect(pipe.transform(value, 'typescript')).toBe(false);
  });
});
