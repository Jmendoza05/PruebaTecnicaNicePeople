import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultContenido = [];
    for (const contenido of value) {
      if (contenido.titulo.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
        contenido.categoria.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultContenido.push(contenido);
      }
    }
    return resultContenido;
  }

}
