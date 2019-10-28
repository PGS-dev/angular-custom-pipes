import { RemoveFalsyPipe } from './removeFalsy.pipe';

describe('RemoveFalsyPipe', () => {
  const pipe = new RemoveFalsyPipe();
  const array = [0, 'blue', '', NaN, 9, true, undefined, 'white', false];

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('RemoveFalsy pipe should return array with truthy values', () => {
    expect(pipe.transform(array)).toEqual(['blue', 9, true, 'white']);
  });
});
