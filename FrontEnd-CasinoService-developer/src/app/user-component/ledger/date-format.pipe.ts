import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: any): any {
    if (value instanceof Date) {
      const datePipe = new DatePipe('en-US');
      return datePipe.transform(value, 'yyyy-MM-dd');
    }
    return value;
  }
}
