import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogSearchComponent } from './dog-search.component';

describe('DogSearchComponent', () => {
  let component: DogSearchComponent;
  let fixture: ComponentFixture<DogSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DogSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
