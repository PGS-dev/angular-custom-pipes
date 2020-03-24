import { Pipe, PipeTransform } from '@angular/core';

import { isArray } from '../../utils/utils';

@Pipe({
  name: 'last'
})
export class LastPipe implements PipeTransform {
  transform(value: any[]): any {
    return isArray(value) && value.length ? value[value.length - 1] : undefined
  }
}
