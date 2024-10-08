import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableDogsComponent } from './available-dogs.component';

describe('AvailableDogsComponent', () => {
  let component: AvailableDogsComponent;
  let fixture: ComponentFixture<AvailableDogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailableDogsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableDogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
