import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidoListadoComponent } from './partido-listado.component';

describe('PartidoListadoComponent', () => {
  let component: PartidoListadoComponent;
  let fixture: ComponentFixture<PartidoListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartidoListadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartidoListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
