import { Pipe, PipeTransform } from '@angular/core';

import { isArray } from '../../utils/utils';

@Pipe({
  name: 'initial'
})
export class InitialPipe implements PipeTransform {
  transform(value: any[]): any[] {
    return isArray(value) && value.length ? value.slice(0, value.length - 1) : value;
  }
}
