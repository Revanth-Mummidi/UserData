import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcardComponent } from './formcard.component';

describe('FormcardComponent', () => {
  let component: FormcardComponent;
  let fixture: ComponentFixture<FormcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormcardComponent]
    });
    fixture = TestBed.createComponent(FormcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
