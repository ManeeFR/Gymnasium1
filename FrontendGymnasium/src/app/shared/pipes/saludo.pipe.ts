import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'saludo'
})
export class SaludoPipe implements PipeTransform {

    transform(hora: Date): string {

        let saludo: string = "Buen";

        let horaActual = hora.getHours();

        if (horaActual >= 5 && horaActual < 13) {
            saludo = saludo + "os días, ";
        } else if (horaActual >= 13 && horaActual < 21) {
            saludo = saludo + "as tardes, ";
            
        } else {
            saludo = saludo + "as noches, ";
        }

        return saludo;
    
      }

}
