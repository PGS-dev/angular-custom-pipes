import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'drop'
})
export class DropPipe implements PipeTransform {
  transform(value: any[], arg?: number): any[] {
    if(Array.isArray(value) && value.length) {
      return arg >= 0 ? this.getValue(value, arg) : value;
    }

    return undefined;
  }

  private hasNoValue(value: any[], arg: number): boolean | undefined {
    return !value[arg];
  }

  private getValue(value: any[], arg: number) {
    return this.hasNoValue(value, arg) ? [] : value.slice(arg);
  }
}
