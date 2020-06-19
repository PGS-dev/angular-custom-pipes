import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'round'
})
export class RoundPipe implements PipeTransform {
  transform(value: number | string, arg?: number): number {
    const result: number = typeof value === 'string' ? parseInt(value) : value;

    return arg ? this.getValue(result, arg) : Math.round(result);
  }

  private getValue(result: number, arg: number): number {
    const pow: number = Math.pow(10, arg);

    return Math.round(result * pow) / pow;
  }
}
