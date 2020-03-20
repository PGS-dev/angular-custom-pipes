import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'last'
})
export class LastPipe implements PipeTransform {
  transform(value: any[]): any {
    return Array.isArray(value) && value.length ? value[value.length - 1] : undefined
  }
}
