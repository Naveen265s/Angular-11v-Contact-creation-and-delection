import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactListDetailsComponent } from './contact-list-details.component';

describe('ContactListDetailsComponent', () => {
  let component: ContactListDetailsComponent;
  let fixture: ComponentFixture<ContactListDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactListDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
