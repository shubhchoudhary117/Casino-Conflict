import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAgentDetailsComponent } from './super-agent-details.component';

describe('SuperAgentMasterDetailsComponent', () => {
  let component: SuperAgentDetailsComponent;
  let fixture: ComponentFixture<SuperAgentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperAgentDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperAgentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
