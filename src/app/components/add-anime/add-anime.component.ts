import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimeService } from 'src/app/services/anime.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-anime',
  templateUrl: './add-anime.component.html',
  styleUrls: ['./add-anime.component.css']
})
export class AddAnimeComponent implements OnInit {
  ngOnInit(): void {}

  animes: any[] = [];
  posterUrl: string = "";
  title: string = "";
  genre: string = "";
  duration: number = 0;
  episode: number = 0;


  AnimeForm: FormGroup;
 

  constructor(private animeService: AnimeService, 
    private router: Router,
    private toastr: ToastrService
    ) {
    this.AnimeForm = new FormGroup({
      posterUrlForm: new FormGroup("", [Validators.required]),
      titleForm: new FormGroup("", [Validators.required]),
      genreForm: new FormGroup("", [Validators.required]),
      durationForm: new FormGroup("", [Validators.required]),
      episodeForm: new FormGroup("", [Validators.required]),
    });
  }


  addAnime(): void {
    const newAnime = {
      posterUrl: this.posterUrl,
      title: this.title,
      genre: this.genre,
      duration: this.duration,
      episode: this.episode,
      };
      this.animeService.addAnime(newAnime).subscribe({
        next: (data: any) => {
          console.log('Success!', data);
          
          this.router.navigate(['/anime']);
          this.toastr.success('Anime successfully added!');


        },
        error: (error: any) => {
          console.log(error);
        }
      })

    }
  }
