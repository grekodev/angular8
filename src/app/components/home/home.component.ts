import {Component, OnInit} from '@angular/core';
import {ArticleServices} from '../../services/article.service';
import {Article} from '../../models/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleServices]
})
export class HomeComponent implements OnInit {
  public title: string;
  public articles: Article[];

  constructor(
    private articleServices: ArticleServices
  ) {
    this.title = 'Ultimos Articulos';
  }

  ngOnInit() {
    this.articleServices.getArticles(true).subscribe(
      response => {
        if (response.articles) {
          this.articles = response.articles;
        } else {
          return false;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
