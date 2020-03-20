import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sum'
})
export class SumPipe implements PipeTransform {
  transform(array: any[]): number {
    return array.reduce((x: number, y: number) => x + y);
  }
}
