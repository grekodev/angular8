import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Article} from '../../models/article';
import {ArticleServices} from '../../services/article.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ArticleServices]
})
export class SearchComponent implements OnInit {

  public articles: Article[];
  public search: string;

  constructor(
    private articleServices: ArticleServices,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    // Revoger los parametros que me llegan por url
    this.route.params.subscribe(params => {
      const search = params.search;
      this.search = search;
      this.articleServices.search(search).subscribe(
        response => {
          if (response.articles) {
            this.articles = response.articles;
          } else {
            this.articles = [];
          }
        },
        error => {
          console.log(error);
          this.articles = [];
        }
      );
    });
  }

}
