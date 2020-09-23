import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcleReaderComponent } from './excle-reader.component';

describe('ExcleReaderComponent', () => {
  let component: ExcleReaderComponent;
  let fixture: ComponentFixture<ExcleReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcleReaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcleReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
