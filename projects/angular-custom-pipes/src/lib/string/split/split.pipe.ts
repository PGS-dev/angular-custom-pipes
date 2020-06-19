import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split'
})
export class SplitPipe implements PipeTransform {
  transform(value: string, args?: string): string[] {
    return args ? value.split(args) : value.split('');
  }
}
