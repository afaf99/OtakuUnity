import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MangaService } from 'src/app/services/manga.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-manga',
  templateUrl: './add-manga.component.html',
  styleUrls: ['./add-manga.component.css']
})
export class AddMangaComponent implements OnInit {
  ngOnInit(): void {}

  mangas: any[] = [];
  posterUrl: string = "";
  title: string = "";
  genre: string = "";
  chapters: number = 0;
  pages: number = 0;




  MangaForm: FormGroup;

  constructor(private mangaService: MangaService,
     private router: Router,
     private toastr: ToastrService
     ) {
    this.MangaForm = new FormGroup({
      posterUrlForm: new FormGroup("", [Validators.required]),
      titleForm: new FormGroup("", [Validators.required]),
      genreForm: new FormGroup("", [Validators.required]),
      chaptersForm: new FormGroup("", [Validators.required]),
      pagesForm: new FormGroup("", [Validators.required]),
    });
  }


  addManga(): void {
    const body = {
      posterUrl: this.posterUrl,
      title: this.title,
      genre: this.genre,
      chapters: this.chapters,
      pages: this.pages,
      };
      this.mangaService.addManga(body).subscribe({
        next: (data: any) => {
          console.log('Success!', data);
          this.router.navigate(['/manga']);
          this.toastr.success('Manga successfully added!');

        },
        error: (error: any) => {
          console.log(error);
        }
      })

    }


}
