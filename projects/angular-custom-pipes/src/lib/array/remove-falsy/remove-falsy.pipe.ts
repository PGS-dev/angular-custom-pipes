import { Pipe, PipeTransform } from '@angular/core';

import { isArray } from '../../utils/utils';

@Pipe({
  name: 'removeFalsy'
})
export class RemoveFalsyPipe implements PipeTransform {
  transform(value: any[]): any[] {
    return isArray(value) ? value.filter(Boolean) : value;
  }
}
