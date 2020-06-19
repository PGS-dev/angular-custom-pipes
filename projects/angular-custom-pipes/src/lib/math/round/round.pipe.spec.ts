import { RoundPipe } from './round.pipe';

describe('RoundPipe', () => {
  const pipe = new RoundPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('round pipe should return rounded value', () => {
    expect(pipe.transform(4.006)).toEqual(4);
  });

  it('round pipe should return rounded value', () => {
    expect(pipe.transform(4.006)).toEqual(4);
  });

  it('round pipe should return rounded value', () => {
    expect(pipe.transform(4.006, 2)).toEqual(4.01);
  });

  it('round pipe should return rounded value', () => {
    expect(pipe.transform(4.222, 1)).toEqual(4.2);
  });

  it('round pipe should return rounded value', () => {
    expect(pipe.transform(4.226, 2)).toEqual(4.23);
  });

  it('round pipe should return rounded value', () => {
    expect(pipe.transform(5, 2)).toEqual(5);
  });
});
