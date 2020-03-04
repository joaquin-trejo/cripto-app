import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms'  
import { ReactiveFormsModule} from '@angular/forms' 
import { RouterModule } from '@angular/router'

import { ListadoMonedasComponent } from './listado-monedas.component';
import { MonedasService } from '../../shared/services/monedas.service';


describe('ListadoMonedasComponent', () => {
  let component: ListadoMonedasComponent;
  let fixture: ComponentFixture<ListadoMonedasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,FormsModule, ReactiveFormsModule,RouterModule.forRoot([])],
      declarations: [ ListadoMonedasComponent ],
      providers: [MonedasService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoMonedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it ('debe mostrar el listado de monedas paginado', async(() => {
    const service: MonedasService = TestBed.get(MonedasService);
    service.obtenerCriptoMonedas(0,20).subscribe(
      (response) => {
        console.log("response: ", response)
        expect(response).not.toBeNull(),
        expect(response.prices).toBeDefined();
        expect(response.prices.length ).toBe(20);
        expect(response.totalPrices).toBeDefined();

      }, 
      (error) => fail(error)
    );
  }));

});
