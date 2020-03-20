import { CalculatePipe } from './calculate.pipe';
import { CalculateActions } from './calculate-actions.enum';

describe('CalculatePipe', () => {
  const firstValue = 10;
  const secondValue = 3;
  const pipe = new CalculatePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('Calculate pipe should add values and return result', () => {
    expect(pipe.transform(firstValue, secondValue, CalculateActions.ADD)).toEqual(13);
  });

  it('Calculate pipe should subtract values and return result', () => {
    expect(pipe.transform(firstValue, secondValue, CalculateActions.SUBTRACT)).toEqual(7);
  });

  it('Calculate pipe should multiply values and return result', () => {
    expect(pipe.transform(firstValue, secondValue, CalculateActions.MULTIPLY)).toEqual(30);
  });

  it('Calculate pipe should divide values and return result', () => {
    expect(pipe.transform(firstValue, secondValue, CalculateActions.DIVIDE)).toEqual(3.3333333333333335);
  });
});
