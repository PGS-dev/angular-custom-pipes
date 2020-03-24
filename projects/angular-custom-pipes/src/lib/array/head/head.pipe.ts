import { Pipe, PipeTransform } from '@angular/core';

import { isArray } from '../../utils/utils';

@Pipe({
  name: 'head'
})
export class HeadPipe implements PipeTransform {
  transform(value: any[]): any {
    return isArray(value) && value.length ? value[0] : undefined;
  }
}
