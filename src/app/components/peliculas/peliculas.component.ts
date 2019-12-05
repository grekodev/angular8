import {Component, OnInit, DoCheck, OnDestroy} from '@angular/core';
import {Pelicula} from '../../models/pelicula';
import {PeliculaService} from '../../services/pelicula.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;
  public peliculas: Array<Pelicula>;
  public favorita: Pelicula;
  public fecha: any;

  constructor(
    private peliculaService: PeliculaService
  ) {
    this.titulo = 'Componente PELICULAS';
    this.peliculas = this.peliculaService.getPeliculas();
    this.fecha = new Date(2020, 8, 12);
  }

  ngOnInit() {
    console.log(this.peliculas);
    console.log('COMPONENTE INICIADO');
    console.log(this.peliculaService.holaMundo());
  }

  ngDoCheck(): void {
    console.log('Docheck LANZADO');
  }

  cambiarTitulo() {
    this.titulo = 'El titulo ha sifo cambidado';
  }

  ngOnDestroy(): void {
    console.log('EL COMPONENTE SE VA ELIMINAR');
  }

  mostrarFavorita(event) {
    this.favorita = event.pelicula;
  }
}
