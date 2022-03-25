import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomInDialogComponent } from './zoom-in-dialog.component';

describe('ZoomInDialogComponent', () => {
  let component: ZoomInDialogComponent;
  let fixture: ComponentFixture<ZoomInDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoomInDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomInDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
