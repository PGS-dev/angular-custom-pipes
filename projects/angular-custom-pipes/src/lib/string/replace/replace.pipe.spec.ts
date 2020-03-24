import { ReplacePipe } from './replace.pipe';

fdescribe('ReplacePipe', () => {
  const pipe = new ReplacePipe();
  const value = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
  const regex = /Lorem Ipsum/gi;
  const valueToReplace = 'simply';

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('create an instance', () => {
    const result = 'Ipsum Lorem is simply dummy text of the printing and typesetting industry.';

    expect(pipe.transform(value, regex, 'Ipsum Lorem')).toEqual(result);
  });

  it('create an instance', () => {
    const result = 'Lorem Ipsum is hardly dummy text of the printing and typesetting industry.';

    expect(pipe.transform(value, valueToReplace, 'hardly')).toEqual(result);
  });
});
