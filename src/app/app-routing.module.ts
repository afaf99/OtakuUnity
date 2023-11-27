import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAnimeComponent } from './components/add-anime/add-anime.component';
import { AddMangaComponent } from './components/add-manga/add-manga.component';
import { AnimeComponent } from './components/anime/anime.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MangaComponent } from './components/manga/manga.component';
import { EditAnimeComponent } from './components/edit-anime/edit-anime.component';
import { EditMangaComponent } from './components/edit-manga/edit-manga.component';
import { AuthGuardService } from "./services/auth-guard.service";

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'home',  canActivate: [AuthGuardService], component: HomeComponent},
  {path:'manga', canActivate: [AuthGuardService], component: MangaComponent},
  {path:'anime', canActivate: [AuthGuardService], component: AnimeComponent},
  {path:'edit-manga/:id', canActivate: [AuthGuardService], component: EditMangaComponent},
  {path:'edit-anime/:id', canActivate: [AuthGuardService], component: EditAnimeComponent},
  {path:'add-manga', canActivate: [AuthGuardService], component: AddMangaComponent},
  {path:'add-anime',canActivate: [AuthGuardService], component: AddAnimeComponent},

  {path:'**', component: ErrorComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
