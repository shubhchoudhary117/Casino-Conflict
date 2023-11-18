import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifySuperAgentComponent } from './modify-super-agent.component';

describe('ModifySuperAgentMasterComponent', () => {
  let component: ModifySuperAgentComponent;
  let fixture: ComponentFixture<ModifySuperAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifySuperAgentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifySuperAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
