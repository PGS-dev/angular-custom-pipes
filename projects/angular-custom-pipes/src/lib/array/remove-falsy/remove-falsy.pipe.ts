import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeFalsy'
})
export class RemoveFalsyPipe implements PipeTransform {
  transform(value: any[]): any[] {
    return Array.isArray(value) ? value.filter(Boolean) : value;
  }
}
