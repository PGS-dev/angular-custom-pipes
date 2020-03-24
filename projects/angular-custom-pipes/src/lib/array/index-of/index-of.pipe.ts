import { Pipe, PipeTransform } from '@angular/core';

import { isArray } from '../../utils/utils';

@Pipe({
  name: 'indexOf'
})
export class IndexOfPipe implements PipeTransform {
  transform(value: number[], arg: number): number {
    return isArray(value) && value.length ? value.indexOf(arg) : -1;
  }
}
