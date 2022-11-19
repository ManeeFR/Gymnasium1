import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'euros',
})


export class EurosPipe implements PipeTransform {

  transform(value: string | null, decimal?: boolean): any {

    if (value == null) return '';

    value = value.toString().replace(/\€/, "");

    for (let i = 0; i < value.length-3; i++) {
      
      value = value.toString().replace(/\,/, ".");

    }

    value = value.substring(0, value.lastIndexOf(".")) + "," + value.substring(value.lastIndexOf(".") + 1, value.lastIndexOf(".") + 3);

    if (decimal != null) {
        if (decimal) value = value.substring(0, value.length - 3);
    }

    value = value + " €"

    return value;

  }
}
