import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCompanyDetailsComponent } from './my-company-details.component';

describe('MyCompanyDetailsComponent', () => {
  let component: MyCompanyDetailsComponent;
  let fixture: ComponentFixture<MyCompanyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCompanyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCompanyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
