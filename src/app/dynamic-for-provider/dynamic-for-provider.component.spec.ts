import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicForProviderComponent } from './dynamic-for-provider.component';

describe('DynamicForProviderComponent', () => {
  let component: DynamicForProviderComponent;
  let fixture: ComponentFixture<DynamicForProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicForProviderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicForProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
