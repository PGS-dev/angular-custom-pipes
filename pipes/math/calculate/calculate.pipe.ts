import { Pipe, PipeTransform } from '@angular/core';
import { CalculateActions } from './calculate-actions.enum';

@Pipe({
  name: 'calculate'
})
export class CalculatePipe implements PipeTransform {
  transform(firstValue: number, secondValue: number, action: CalculateActions): number {
    switch(action) {
      case CalculateActions.ADD:
        return firstValue + secondValue;
      case CalculateActions.SUBTRACT:
        return firstValue - secondValue;
      case CalculateActions.MULTIPLY:
        return firstValue * secondValue;
      case CalculateActions.DIVIDE:
        return firstValue / secondValue;
    }
  }
}
