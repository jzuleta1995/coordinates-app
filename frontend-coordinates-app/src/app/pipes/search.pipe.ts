import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})

@Injectable()
export class SearchPipe implements PipeTransform{
  transform(items: any, term: any): any{
    if(term === undefined){
      return items;
    }

    return items.filter(function(item: any){
      return item.permit_type.toLowerCase().includes(term.toLowerCase());
    });
  }
}
