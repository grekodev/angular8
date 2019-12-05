import {Component, OnInit} from '@angular/core';
import {Article} from '../../models/article';
import swal from 'sweetalert';
import {ArticleServices} from '../../services/article.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Global} from '../../services/global';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleServices]
})
export class ArticleNewComponent implements OnInit {
  public article: Article;
  public status: string;
  public pageTitle: string;

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
    this.pageTitle = 'Nuevo Articulo';

  }

  ngOnInit() {
  }

  onSubmit() {
    this.articleServices.create(this.article).subscribe(
      response => {
        if (response.status === 'success') {
          this.status = 'success';
          this.article = response.article;
          // Alerta
          swal(
            'Articulo Creado',
            'El articulo se ha creado correctamente',
            'success'
          );

          this.router.navigate(['/blog']);
        } else {
          this.status = 'error';
        }
      },
      error => {
        console.log(error);
        this.status = 'error';
      }
    );
  }

  ImageUpload(data) {
    const imageData = JSON.parse(data.response);
    this.article.image = imageData.image;
  }
}
