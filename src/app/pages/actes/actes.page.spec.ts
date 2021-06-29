import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActesPage } from './actes.page';

describe('ActesPage', () => {
  let component: ActesPage;
  let fixture: ComponentFixture<ActesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
