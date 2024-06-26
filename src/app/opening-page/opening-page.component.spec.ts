import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningPageComponent } from './opening-page.component';

describe('OpeningPageComponent', () => {
  let component: OpeningPageComponent;
  let fixture: ComponentFixture<OpeningPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpeningPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpeningPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
