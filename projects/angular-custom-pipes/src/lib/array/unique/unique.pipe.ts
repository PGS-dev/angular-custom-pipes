import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unique'
})
export class UniquePipe implements PipeTransform {
  transform(array: any[]): any[] {
    return Array.from(new Set(array));
  }
}
