import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concat'
})
export class ConcatPipe implements PipeTransform {
  transform(value: string, separator: string, secondValue: string): string {
    return value.concat(separator, secondValue);
  }
}
