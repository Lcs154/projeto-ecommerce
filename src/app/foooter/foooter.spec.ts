import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Foooter } from './foooter';

describe('Foooter', () => {
  let component: Foooter;
  let fixture: ComponentFixture<Foooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Foooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Foooter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
