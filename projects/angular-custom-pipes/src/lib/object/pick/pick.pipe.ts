import { Pipe, PipeTransform } from '@angular/core';

import { isObject } from '../../utils/utils';

@Pipe({
  name: 'pick'
})
export class PickPipe implements PipeTransform {
  transform(value: any, ...args: string[]): any {
    return isObject(value) ? this.getValue(value, args) : value;
  }

  private getValue(value, args): any {
    return args.reduce((result: any, key: string) => {
      return Object.assign(result, {[key]: value[key]});
    }, {});
  }
}
