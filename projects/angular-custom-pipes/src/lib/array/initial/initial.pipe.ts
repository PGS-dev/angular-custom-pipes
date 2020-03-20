import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initial'
})
export class InitialPipe implements PipeTransform {
  transform(value: any[]): any[] {
    return Array.isArray(value) && value.length ? value.slice(0, value.length - 1) : value;
  }
}
