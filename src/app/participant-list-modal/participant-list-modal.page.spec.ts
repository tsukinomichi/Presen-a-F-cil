import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParticipantListModalPage } from './participant-list-modal.page';

describe('ParticipantListModalPage', () => {
  let component: ParticipantListModalPage;
  let fixture: ComponentFixture<ParticipantListModalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantListModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
