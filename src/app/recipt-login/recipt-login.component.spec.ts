import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciptLoginComponent } from './recipt-login.component';

describe('ReciptLoginComponent', () => {
  let component: ReciptLoginComponent;
  let fixture: ComponentFixture<ReciptLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReciptLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReciptLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
