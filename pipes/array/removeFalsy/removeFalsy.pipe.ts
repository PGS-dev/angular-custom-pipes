import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeFalsy'
})
export class RemoveFalsyPipe implements PipeTransform {
  transform(array: any[]): any[] {
    return array.filter(Boolean);
  }
}
