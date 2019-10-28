import { UniquePipe } from './unique.pipe';

describe('UniquePipe', () => {
  const pipe = new UniquePipe();
  const array = ['angular', 'vue', 'angular', 'react'];

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('Unique pipe should return array with unique values', () => {
    expect(pipe.transform(array)).toEqual(['angular', 'vue', 'react']);
  });

  it('Unique pipe should return array with 4 items', () => {
   pipe.transform(array);

    expect(array.length).toEqual(4);
  });
});
