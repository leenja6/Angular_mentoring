import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { loreMoreServices } from 'src/app/commons/services/lore-more.services';
import { LoreMoreComponent } from './lore-more.component';

describe('LoreMoreComponent', () => {
 
  let appLoreMore: LoreMoreComponent;
  let LoreMoreServices: loreMoreServices;
  let fixture: ComponentFixture<LoreMoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoreMoreComponent],
      providers: [loreMoreServices],
      imports:[HttpClientModule, AppRoutingModule],
    });
    
    LoreMoreServices = TestBed.inject(loreMoreServices);
    fixture = TestBed.createComponent(LoreMoreComponent);
    appLoreMore = fixture.componentInstance;
    
  });
  
  it('Создание компонента appLoreMore', () => {
    expect(appLoreMore).toBeDefined();
  });

  it('Добовляется ли counter', () => {
    const spy = spyOn(LoreMoreServices, 'addCount').and.returnValue();
    appLoreMore.addCount();
    expect(spy).toHaveBeenCalled();
  });
});
