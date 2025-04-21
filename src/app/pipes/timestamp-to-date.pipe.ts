import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'timestampToDate'
})
export class TimestampToDatePipe implements PipeTransform {

  transform(value: number, format: Intl.DateTimeFormatOptions = {}): string {
    if (!value) return '';

    // Convert seconds to milliseconds if needed
    const timestamp = value.toString().length === 10 ? value * 1000 : value;

    const date = new Date(timestamp);

    // Default format if none is provided
    const defaultFormat: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };

    return date.toLocaleDateString(undefined, Object.keys(format).length ? format : defaultFormat);
  }

}
