import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {

  transform(value: any[], page_size: any | string, page_number: any): any[] {
    if (!value.length) return []
    if (page_size === 'all') {
      return value
    }
    page_size = page_size || 2
    page_number = page_number || 1
    --page_number

    return value.slice(page_number * page_size, (page_number + 1) * page_size)
  }

}
