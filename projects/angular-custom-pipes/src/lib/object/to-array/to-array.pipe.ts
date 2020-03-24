import { Pipe, PipeTransform } from '@angular/core';

import { isObject } from '../../utils/utils';

@Pipe({
  name: 'toArray'
})
export class ToArrayPipe implements PipeTransform {
  transform(value: any): any {
    return isObject(value) ? Object.keys(value).map((key: any) => value[key]) : value;
  }
}
