import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DhtmlxGridComponent } from './dhtmlx-grid.component';

describe('DhtmlxGridComponent', () => {
  let component: DhtmlxGridComponent;
  let fixture: ComponentFixture<DhtmlxGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhtmlxGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DhtmlxGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
