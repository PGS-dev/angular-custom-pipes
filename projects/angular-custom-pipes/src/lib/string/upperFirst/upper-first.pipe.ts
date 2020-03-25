import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperFirst'
})
export class UpperFirstPipe implements PipeTransform {
  transform(value: string): string {
    const firstValue: string = value[0].toUpperCase();
    const restOfValue: string = value.slice(1);

    return firstValue + restOfValue;
  }
}
