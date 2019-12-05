import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {
  public nombre: string;
  public apellidos: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    // Trayendo parametros de url
    this.route.params.subscribe((params: Params) => {
      this.nombre = params.nombre;
      this.apellidos = params.apellidos;
      console.log(params);
    });
  }

  redireccion() {
    // this.router.navigate(['/formulario']);
    this.router.navigate(['/pagina-de-pruebas', 'Brayan', 'Pastor']);
  }

}
