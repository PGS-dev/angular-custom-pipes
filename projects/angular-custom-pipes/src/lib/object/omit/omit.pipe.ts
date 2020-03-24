import { Pipe, PipeTransform } from '@angular/core';

import { isObject } from '../../utils/utils';

@Pipe({
  name: 'omit'
})
export class OmitPipe implements PipeTransform {
  transform(value: any, ...args: string[]): any {
    return isObject(value) ? this.getValue(value, args) : value;
  }

  private getValue(value, args): any {
    let result = {};

    Object.keys(value).filter((key: string) => {
      if(args.indexOf(key) === -1) {
        Object.assign(result, {[key]: value[key]})
      }
    });

    return result;
  }
}
