import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageDetailesComponent } from './language-detailes.component';

describe('LanguageDetailesComponent', () => {
  let component: LanguageDetailesComponent;
  let fixture: ComponentFixture<LanguageDetailesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageDetailesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
