import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitClientMasterComponent } from './limit-client-master.component';

describe('LimitClientMasterComponent', () => {
  let component: LimitClientMasterComponent;
  let fixture: ComponentFixture<LimitClientMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimitClientMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LimitClientMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
