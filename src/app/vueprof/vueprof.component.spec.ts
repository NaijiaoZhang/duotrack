import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VueprofComponent } from './vueprof.component';

describe('VueprofComponent', () => {
  let component: VueprofComponent;
  let fixture: ComponentFixture<VueprofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VueprofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VueprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
