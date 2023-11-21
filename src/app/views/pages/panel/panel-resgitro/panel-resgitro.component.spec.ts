import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelResgitroComponent } from './panel-resgitro.component';

describe('PanelResgitroComponent', () => {
  let component: PanelResgitroComponent;
  let fixture: ComponentFixture<PanelResgitroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelResgitroComponent]
    });
    fixture = TestBed.createComponent(PanelResgitroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
