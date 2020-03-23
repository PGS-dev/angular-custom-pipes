import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uniqueBy'
})
export class UniqueByPipe implements PipeTransform {
  transform(array: any[], key: string): any[] {
    return array.filter((item: any, index: number, result: any[]) => result.findIndex(resultItem => resultItem[key] === item[key]) === index);
  }
}