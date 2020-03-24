import { Pipe, PipeTransform } from '@angular/core';

import { isObject } from '../../utils/utils';

@Pipe({
  name: 'assign'
})
export class AssignPipe implements PipeTransform {
  transform(value: any, arg: any): unknown {
    return isObject(value) ? Object.assign(value, arg) : value;
  }
}
