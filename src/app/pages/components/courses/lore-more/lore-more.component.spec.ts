import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoreMoreComponent } from './lore-more.component';

describe('LoreMoreComponent', () => {
  let component: LoreMoreComponent;
  let fixture: ComponentFixture<LoreMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoreMoreComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoreMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
