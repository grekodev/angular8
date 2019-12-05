import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pelicula} from '../../models/pelicula';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  @Input() pelicula: Pelicula;
  @Input() i: number;
  @Output() MarcarFavorita = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  seleccionar(event, pelicula) {
    this.MarcarFavorita.emit({
      pelicula
    });
  }

}
