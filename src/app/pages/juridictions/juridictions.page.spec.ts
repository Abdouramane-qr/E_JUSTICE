import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JuridictionsPage } from './juridictions.page';

describe('JuridictionsPage', () => {
  let component: JuridictionsPage;
  let fixture: ComponentFixture<JuridictionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuridictionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JuridictionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
