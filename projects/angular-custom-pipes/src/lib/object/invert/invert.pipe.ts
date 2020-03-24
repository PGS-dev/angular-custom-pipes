import { Pipe, PipeTransform } from '@angular/core';

import { isObject } from '../../utils/utils';

@Pipe({
  name: 'invert'
})
export class InvertPipe implements PipeTransform {
  transform(value: any): any {
    return isObject(value) ? this.getValue(value) : value;
  }

  private getValue(value): any {
    return Object.keys(value).reduce((result: any, key: string) => {
      return Object.assign(result, {[value[key]]: key});
    }, {});
  }
}
