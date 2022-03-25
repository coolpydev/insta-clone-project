import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaCloneComponent } from './insta-clone.component';

describe('InstaCloneComponent', () => {
  let component: InstaCloneComponent;
  let fixture: ComponentFixture<InstaCloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstaCloneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstaCloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
