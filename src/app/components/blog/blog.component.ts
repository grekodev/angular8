import {Component, OnInit} from '@angular/core';
import {ArticleServices} from '../../services/article.service';
import {Article} from '../../models/article';
import {Global} from '../../services/global';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ArticleServices]
})
export class BlogComponent implements OnInit {
  public articles: Article[];
  public url: string;
  constructor(
    private articleServices: ArticleServices
  ) {
    this.url = Global.url;
  }

  ngOnInit() {
    this.articleServices.getArticles().subscribe(
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
