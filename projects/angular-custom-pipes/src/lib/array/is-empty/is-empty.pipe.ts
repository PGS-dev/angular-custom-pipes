import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isEmpty'
})
export class IsEmptyPipe implements PipeTransform {
  transform(value: any[]): any {
    return Array.isArray(value) ? !value.length : value;
  }
}
