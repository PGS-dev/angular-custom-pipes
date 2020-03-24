import { Pipe, PipeTransform } from '@angular/core';
import { isArray } from '../../utils/utils';

@Pipe({
  name: 'max'
})
export class MaxPipe implements PipeTransform {
  transform(value: number[]): number {
    return Math.max(...value);
  }
}
