import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Article} from '../models/article';
import {Global} from './global';

@Injectable()
export class ArticleServices {
  public url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = Global.url;
  }

  pruebas() {
    return 'Soy el servicio de articulos:::::::::::::::::';
  }

  getArticles(last: any = null): Observable<any> {
    let articles = 'articles';

    if (last != null) {
      articles = 'articles/true';
    }
    return this.http.get(this.url + articles);
  }

  getArticle(articleId): Observable<any> {
    return this.http.get(this.url + 'article/' + articleId);
  }

  search(searchString): Observable<any> {
    return this.http.get(this.url + 'search/' + searchString);
  }

  create(article): Observable<any> {
    const params = JSON.stringify(article);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(this.url + 'save', params, {headers});
  }

  update(id, article): Observable<any> {
    const params = JSON.stringify(article);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.put(this.url + 'article/' + id, params, {headers});
  }

  delete(id) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(this.url + 'article/' + id, {headers});
  }
}
