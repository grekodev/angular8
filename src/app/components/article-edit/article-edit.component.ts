import {Component, OnInit} from '@angular/core';
import {Article} from '../../models/article';
import {ArticleServices} from '../../services/article.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Global} from '../../services/global';
import swal from 'sweetalert';

@Component({
  selector: 'app-article-edit',
  templateUrl: '../article-new/article-new.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers: [ArticleServices]

})
export class ArticleEditComponent implements OnInit {

  public article: Article;
  public status: string;
  public isEdit: boolean;
  public pageTitle: string;
  public url: string;
  afuConfig = {
    multiple: false,
    formatsAllowed: '.jpg,.png, gif, jpeg',
    maxSize: '50',
    uploadAPI: {
      url: Global.url + 'upload-image'
    },
    theme: 'attachPin',
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube tu imagen para el articulo...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !'
    }
  };

  constructor(
    private articleServices: ArticleServices,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.article = new Article('', '', '', null, null);
    this.isEdit = true;
    this.pageTitle = 'Editar Articulo';
    this.url = Global.url;
  }

  ngOnInit() {
    this.getArticle();
  }

  onSubmit() {
    this.articleServices.update(this.article._id, this.article).subscribe(
      response => {
        if (response.status === 'success') {
          this.status = 'success';
          this.article = response.article;
          // Alerta
          swal(
            'Articulo Editado',
            'El articulo se ha editado correctamente',
            'success'
          );
          this.router.navigate(['/blog/articulo', this.article._id]);
        } else {
          this.status = 'error';
        }
      },
      error => {
        console.log(error);
        this.status = 'error';
        swal(
          'Edicion Fallida',
          'El articulo no se ha editado correctamente',
          'error'
        );
      }
    );
  }

  ImageUpload(data) {
    const imageData = JSON.parse(data.response);
    this.article.image = imageData.image;
  }

  getArticle() {
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

}
