import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lowerFirst'
})
export class LowerFirstPipe implements PipeTransform {
  transform(value: string): string {
    const firstValue: string = value[0].toLowerCase();
    const restOfValue: string = value.slice(1);

    return firstValue + restOfValue;
  }
}
