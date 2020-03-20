import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'indexOf'
})
export class IndexOfPipe implements PipeTransform {
  transform(value: number[], arg: number): number {
    return Array.isArray(value) && value.length ? value.indexOf(arg) : -1;
  }
}
