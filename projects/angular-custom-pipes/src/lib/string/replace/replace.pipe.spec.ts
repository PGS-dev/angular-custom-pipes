import { ReplacePipe } from './replace.pipe';

describe('ReplacePipe', () => {
  const pipe = new ReplacePipe();
  const value = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
  const regex = /simply/gi;
  const valueToReplace = 'simply';

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('replace pipe should return new string', () => {
    const result = 'Lorem Ipsum is hardly dummy text of the printing and typesetting industry.';

    expect(pipe.transform(value, regex, 'hardly')).toEqual(result);
  });

  it('replace pipe should return new string', () => {
    const result = 'Lorem Ipsum is hardly dummy text of the printing and typesetting industry.';

    expect(pipe.transform(value, valueToReplace, 'hardly')).toEqual(result);
  });
});
