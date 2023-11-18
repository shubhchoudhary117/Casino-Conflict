import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitSuperAgentMasterComponent } from './limit-super-agent-master.component';

describe('LimitSuperAgentMasterComponent', () => {
  let component: LimitSuperAgentMasterComponent;
  let fixture: ComponentFixture<LimitSuperAgentMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimitSuperAgentMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LimitSuperAgentMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
