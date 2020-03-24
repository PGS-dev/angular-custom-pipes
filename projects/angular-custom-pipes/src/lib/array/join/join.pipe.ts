import { Pipe, PipeTransform } from '@angular/core';

import { isArray } from '../../utils/utils';

@Pipe({
  name: 'join'
})
export class JoinPipe implements PipeTransform {
  transform(value: any[], separator: string): string {
    return isArray(value) ? value.join(separator) : ''
  }
}
