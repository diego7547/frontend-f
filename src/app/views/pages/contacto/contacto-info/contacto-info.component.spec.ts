import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoInfoComponent } from './contacto-info.component';

describe('ContactoInfoComponent', () => {
  let component: ContactoInfoComponent;
  let fixture: ComponentFixture<ContactoInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactoInfoComponent]
    });
    fixture = TestBed.createComponent(ContactoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
