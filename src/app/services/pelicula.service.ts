import {Injectable} from '@angular/core';
import {Pelicula} from '../models/pelicula';

@Injectable()
export class PeliculaService {
  public peliculas: Array<Pelicula>;

  constructor() {
    this.peliculas = [
      new Pelicula(
        'spiderman 4',
        2019,
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRVyvOJvJ4McH7F3Dh2crtihUCU0nwjTG2lJljRiK5JSRKaOdBN'),
      new Pelicula(
        'los vengadore',
        2018,
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRccKQoMk9OtS9wAmzQTyYiWzQqdTEMh0Ns40gJsyJ5bL_zsEj5'),
      new Pelicula(
        'batman vs superman',
        2015,
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmkB98zSIxxdtTJJyvCabS5OLeOO0jzQyUV8tlWgpcPGGOwPiV')
    ];
  }

  holaMundo() {
    return 'Hola Mundo desde un servicio de angular!!!';
  }

  getPeliculas() {
    return this.peliculas;
  }
}
