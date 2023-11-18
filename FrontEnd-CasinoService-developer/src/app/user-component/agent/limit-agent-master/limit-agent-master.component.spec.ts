import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitAgentMasterComponent } from './limit-agent-master.component';

describe('LimitAgentMasterComponent', () => {
  let component: LimitAgentMasterComponent;
  let fixture: ComponentFixture<LimitAgentMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimitAgentMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LimitAgentMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
