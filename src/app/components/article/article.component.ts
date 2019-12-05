import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ArticleServices} from '../../services/article.service';
import {Article} from '../../models/article';
import {Global} from '../../services/global';
import swal from 'sweetalert';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleServices]
})
export class ArticleComponent implements OnInit {
  public article: Article;
  public url: string;

  constructor(
    private articleServices: ArticleServices,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.url = Global.url;
    this.article = {_id: '', title: '', content: '', image: null, date: null};
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params.id;
      this.articleServices.getArticle(id).subscribe(
        response => {
          if (response.article) {
            this.article = response.article;
          } else {
            this.router.navigate(['/home']);
          }
        },
        error => {
          this.router.navigate(['/home']);
          console.log(error);
        }
      );

    });
  }

  delete(id) {
    swal({
      title: 'Estas Seguro?',
      text: 'Una vez borrado recuperarlo',
      icon: 'warning',
      buttons: [true, true],
      dangerMode: true
    })
      .then((willDelete) => {
        if (willDelete) {
          this.articleServices.delete(id).subscribe(
            response => {
              swal('El articulo ha sido borrado', {
                icon: 'success',
              });
              this.router.navigate(['/blog']);
            },
            error => {
              console.log(error);
              this.router.navigate(['/blog']);
            }
          );
        } else {
          swal('Tranquilo, nada se ha borrado');
        }
      });
  }

}
