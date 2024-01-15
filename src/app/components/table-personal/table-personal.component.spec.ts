import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePersonalComponent } from './table-personal.component';

describe('TablePersonalComponent', () => {
  let component: TablePersonalComponent;
  let fixture: ComponentFixture<TablePersonalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablePersonalComponent]
    });
    fixture = TestBed.createComponent(TablePersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
