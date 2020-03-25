import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'startsWith'
})
export class StartsWithPipe implements PipeTransform {
  transform(value: string, args: string): boolean {
    return value[0] === args;
  }
}
