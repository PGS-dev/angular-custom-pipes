import { StartsWithPipe } from './starts-with.pipe';

describe('StartsWithPipe', () => {
  const pipe = new StartsWithPipe();
  const value = "Lorem Ipsum"

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('startsWith pipe should return true', () => {
    expect(pipe.transform(value, 'L')).toBeTruthy();
  });

  it('startsWith pipe should return false', () => {
    expect(pipe.transform(value, 'l')).toBeFalse();
  });
});
