// Import BrowserAnimationsModule from @angular/platform-browser/animations
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { AnimeComponent } from './components/anime/anime.component';
import { MangaComponent } from './components/manga/manga.component';
import { LoginComponent } from './components/login/login.component';
import { EditAnimeComponent } from './components/edit-anime/edit-anime.component';
import { EditMangaComponent } from './components/edit-manga/edit-manga.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddAnimeComponent } from './components/add-anime/add-anime.component';
import { AddMangaComponent } from './components/add-manga/add-manga.component';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AnimeComponent,
    MangaComponent,
    LoginComponent,
    EditAnimeComponent,
    EditMangaComponent,
    HomeComponent,
    AddAnimeComponent,
    AddMangaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
