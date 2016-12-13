/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SalertComponent } from './salert.component';

describe('SalertComponent', () => {
  let component: SalertComponent;
  let fixture: ComponentFixture<SalertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
