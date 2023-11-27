import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MangaService } from 'src/app/services/manga.service';

@Component({
  selector: 'app-new-manga',
  templateUrl: './edit-manga.component.html',
  styleUrls: ['./edit-manga.component.css']
})
export class EditMangaComponent implements OnInit {
  mangas: any[] = [];
  posterUrl: string = "";
  title: string = "";
  genre: string = "";
  chapters: number = 0;
  pages: number = 0;
  id: any;

  MangaForm: FormGroup;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private mangaService: MangaService, 
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

    ngOnInit(): void {
      this.id = this.activatedRoute.snapshot.params['id'];
      if (this.id != -1) {
        this.mangaService.getMangaById(this.id)
          .subscribe(
            data => {
              this.title = data.title;
              this.genre = data.genre;
              this.chapters = data.chapters;
              this.pages = data.pages;
              this.posterUrl = data.posterUrl;
            }
          );
      }
    }

  saveManga(): void {
    const body = {
      title: this.title,
      genre: this.genre,
      chapters: this.chapters,
      pages: this.pages,
      posterUrl: this.posterUrl,

      };
      this.id = this.activatedRoute.snapshot.paramMap.get('id');
      console.log("manga id is ", this.id);

      this.mangaService.editManga(this.id, body).subscribe({
        next: (data) => {
          console.log('Success!', data);
          this.router.navigate(['/manga']);
          this.toastr.success('Manga successfully updated!');



        },
        error: (error) => {
          console.log(error);
        }
      })

    }

  }
