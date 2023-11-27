import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/services/anime.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit{
  animes: any[] =[];
  posterUrl: string =  "";
  title: string = "";
  genre: string = "";
  duration: number = 0;
  episode: number = 0;
  id: number = 1;
  rate: number = 0;

  page: number = 1; 
  itemsPerPage: number = 3;




  constructor(private animeService: AnimeService,
     private router: Router,
     private toastr: ToastrService
     ){}


  ngOnInit(): void {
    this.getAnime();
    }



  getAnime(): void{
    this.animeService.getAllAnime().subscribe({
      next: (data) => {
        console.log(data);
        this.animes = data;
      },
      error: (error) => {
        console.log('Error', error);
      }
    });
  }

  putAnime(id: number): void{
    const body = {

      title: this.title,
      genre: this.genre,
      duration: this.duration,
      episode: this.episode,
      posterUrl: this.posterUrl,
          
    };
    this.animeService.editAnime(id,body).subscribe({
      next:(data) => {
        console.log('Success!', data);
        this.getAnime();
          this.router.navigate(['/anime', id]);
      },
      error: (e) => {
        console.log(e);        
      }
    })
  }

  deleteAnime(id: number):void{
    this.animeService.deleteAnime(id).subscribe({
      next: (data)=>{
        console.log("Anime deleted successfully");
        this.toastr.error('Anime deleted successfully!');

      },
      error: (e) => {
        console.log(e);        
      }
    })
  }

  onPageChange(pageNumber: number): void { 
    this.page = pageNumber; }

}
