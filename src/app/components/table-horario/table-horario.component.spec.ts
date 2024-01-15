import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHorarioComponent } from './table-horario.component';

describe('TableHorarioComponent', () => {
  let component: TableHorarioComponent;
  let fixture: ComponentFixture<TableHorarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableHorarioComponent]
    });
    fixture = TestBed.createComponent(TableHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
