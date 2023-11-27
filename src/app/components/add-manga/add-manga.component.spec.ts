import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMangaComponent } from './add-manga.component';

describe('AddMangaComponent', () => {
  let component: AddMangaComponent;
  let fixture: ComponentFixture<AddMangaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMangaComponent]
    });
    fixture = TestBed.createComponent(AddMangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
