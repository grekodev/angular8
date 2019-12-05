import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'espar'
})

export class EsparPipe implements PipeTransform {
  transform(value: any): any {
    let espar = 'No es par';
    if (value % 2 === 0) {
      espar = 'es un numero par';
    }
    return `El año es ${value} y ${espar}`;
  }
}
