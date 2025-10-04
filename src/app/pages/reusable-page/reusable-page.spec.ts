import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusablePage } from './reusable-page';

describe('ReusablePage', () => {
  let component: ReusablePage;
  let fixture: ComponentFixture<ReusablePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReusablePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
