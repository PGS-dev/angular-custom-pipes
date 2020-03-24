import { Pipe, PipeTransform } from '@angular/core';

import { isObject } from '../../utils/utils';

@Pipe({
  name: 'values'
})
export class ValuesPipe implements PipeTransform {
  transform(value: any): any {
    return isObject(value) ? Object.values(value) : value;
  }
}
