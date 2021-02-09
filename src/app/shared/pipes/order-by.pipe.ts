import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(arr: Array<any>, key: string, isAsc: boolean = true): Array<any> {
    console.log('Hello from orderBy pipe' + key + isAsc);
    const sortOrder = isAsc ? 1 : -1;
    return arr.sort((a, b) => {
      const comparisonResult = (a[key] < b[key]) ? -1 : (a[key] > b[key]) ? 1 : 0;
      return comparisonResult * sortOrder;
    });
  }

}
