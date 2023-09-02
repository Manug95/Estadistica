import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisisCombinatorioComponent } from './analisis-combinatorio.component';

describe('AnalisisCombinatorioComponent', () => {
  let component: AnalisisCombinatorioComponent;
  let fixture: ComponentFixture<AnalisisCombinatorioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnalisisCombinatorioComponent]
    });
    fixture = TestBed.createComponent(AnalisisCombinatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
