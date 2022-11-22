import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmacenesAddComponent } from './almacenes-add.component';

describe('AlmacenesAddComponent', () => {
  let component: AlmacenesAddComponent;
  let fixture: ComponentFixture<AlmacenesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlmacenesAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlmacenesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
