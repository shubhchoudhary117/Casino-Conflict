import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyAgentMasterComponent } from './modify-agent-master.component';

describe('ModifyAgentMasterComponent', () => {
  let component: ModifyAgentMasterComponent;
  let fixture: ComponentFixture<ModifyAgentMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyAgentMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyAgentMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
