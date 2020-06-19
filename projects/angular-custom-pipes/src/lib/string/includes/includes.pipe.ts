import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'includes'
})
export class IncludesPipe implements PipeTransform {
  transform(value: string, searchValue: string): boolean {
    return value.includes(searchValue);
  }

}
