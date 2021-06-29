import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailsMenuPage } from './details-menu.page';

describe('DetailsMenuPage', () => {
  let component: DetailsMenuPage;
  let fixture: ComponentFixture<DetailsMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
