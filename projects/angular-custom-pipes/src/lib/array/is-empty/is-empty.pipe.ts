import { Pipe, PipeTransform } from '@angular/core';

import { isArray } from '../../utils/utils';

@Pipe({
  name: 'isEmpty'
})
export class IsEmptyPipe implements PipeTransform {
  transform(value: any[]): boolean {
    return isArray(value) ? !value.length : false;
  }
}
