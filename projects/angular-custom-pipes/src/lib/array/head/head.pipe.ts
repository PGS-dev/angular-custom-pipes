import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'head'
})
export class HeadPipe implements PipeTransform {
  transform(value: any[]): any {
    return Array.isArray(value) && value.length ? value[0] : undefined;
  }
}
