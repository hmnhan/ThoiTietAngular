import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockFavoriteComponent } from './stock-favorite.component';

describe('StockFavoriteComponent', () => {
  let component: StockFavoriteComponent;
  let fixture: ComponentFixture<StockFavoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockFavoriteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
