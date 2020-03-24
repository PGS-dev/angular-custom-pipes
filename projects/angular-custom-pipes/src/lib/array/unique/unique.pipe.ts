import { Pipe, PipeTransform } from '@angular/core';

import { isArray } from '../../utils/utils';

@Pipe({
  name: 'unique'
})
export class UniquePipe implements PipeTransform {
  transform(value: any[]): any[] {
    return isArray(value) ? Array.from(new Set(value)) : value;
  }
}
