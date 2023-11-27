import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-new-anime',
  templateUrl: './edit-anime.component.html',
  styleUrls: ['./edit-anime.component.css']
})
export class EditAnimeComponent implements OnInit {
  animes: any[] = [];
  posterUrl: string = "";
  title: string = "";
  genre: string = "";
  duration: number = 0;
  episode: number = 0;
  id: any;

  AnimeForm: FormGroup;

  
  constructor(
    private activatedRoute: ActivatedRoute,
    private animeService: AnimeService, 
    private router: Router,
    private toastr: ToastrService) {
      this.AnimeForm = new FormGroup({
        posterUrlForm: new FormGroup("", [Validators.required]),
        titleForm: new FormGroup("", [Validators.required]),
        genreForm: new FormGroup("", [Validators.required]),
        durationForm: new FormGroup("", [Validators.required]),
        episodeForm: new FormGroup("", [Validators.required]),
      });
    }

    ngOnInit(): void {
      this.id = this.activatedRoute.snapshot.params['id'];
      if (this.id != -1) {
        this.animeService.getAnimeById(this.id)
          .subscribe(
            data => {
              this.title = data.title;
              this.genre = data.genre;
              this.duration = data.duration;
              this.episode = data.episode;
              this.posterUrl = data.posterUrl;
            }
          );
      }
    }

  saveAnime(): void {
      const body = {
        title: this.title,
        genre: this.genre,
        duration: this.duration,
        episode: this.episode,
        posterUrl: this.posterUrl
      };
      this.id = this.activatedRoute.snapshot.paramMap.get('id');
      console.log("anime id is ", this.id);

      this.animeService.editAnime(this.id, body).subscribe({
        next: (data) => {
          console.log('Success!', data);
          this.router.navigate(['/anime']);

          this.toastr.success('Anime successfully updated!');

        },
        error: (e) => {
          console.log(e);
        }
      });
    }
  }

