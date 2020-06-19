import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform {
  transform(value: string, regex: RegExp | string, newValue: string): string {
    return value.replace(regex, newValue);
  }
}
