import { Pipe, PipeTransform } from '@angular/core';

import { isObject } from '../../utils/utils';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {
  transform(value: any): any {
    return isObject(value) ? Object.keys(value) : value;
  }

}
