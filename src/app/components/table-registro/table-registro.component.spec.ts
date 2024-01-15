import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRegistroComponent } from './table-registro.component';

describe('TableRegistroComponent', () => {
  let component: TableRegistroComponent;
  let fixture: ComponentFixture<TableRegistroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableRegistroComponent]
    });
    fixture = TestBed.createComponent(TableRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
