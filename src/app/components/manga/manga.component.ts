import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MangaService } from 'src/app/services/manga.service';

@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html',
  styleUrls: ['./manga.component.css']
})
export class MangaComponent implements OnInit{
  mangas: any[] = [];
  posterUrl: string =  "";
  title: string = "";
  genre: string = "";
  chapters: number = 0;
  pages: number = 0;
  id: number = 1;

  page: number = 1; 
  itemsPerPage: number = 3;

  constructor(private mangaService: MangaService, 
    private router: Router,
    private toastr: ToastrService){}

  ngOnInit(): void {
    this.getManga();
  }

  getManga(): void{
    this.mangaService.getManga().subscribe({
      next: (data) => {
        console.log(data);
        this.mangas = data;
      },
      error: (error) => {
        console.log('Error', error);
      }
    })
  }

  putManga(id: number): void{
    const body = {
      title: this.title,
      genre: this.genre,
      duration: this.chapters,
      episode: this.pages,
      posterUrl: this.posterUrl,
 
    
    };
    this.mangaService.editManga(id,body).subscribe({
      next:(data) => {
        console.log('Success!', data);
          this.router.navigate(['/manga', id]);
      },
      error: (e) => {
        console.log(e);        
      }
    })
  }

  deleteManga(id: number):void{
    this.mangaService.deleteManga(id).subscribe({
      next: (data)=>{
        console.log("Course deleted successfully", data);

        this.toastr.error('Manga deleted successfully!');

      },
      error: (e) => {
        console.log(e);        
      }
    })
  }

  onPageChange(pageNumber: number): void { this.page = pageNumber; }


}
