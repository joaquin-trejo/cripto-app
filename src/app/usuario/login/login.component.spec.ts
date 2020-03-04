import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms'  
import { ReactiveFormsModule} from '@angular/forms' 
import { RouterModule } from '@angular/router'

import { LoginComponent } from './login.component';
import { UsuarioService } from '../shared/services/usuario.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,FormsModule, ReactiveFormsModule,RouterModule.forRoot([])],
      declarations: [ LoginComponent ],
      providers: [UsuarioService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('debe permitir un login exitoso', async(() => {
    const service: UsuarioService = TestBed.get(UsuarioService);
    service.loginUsuario({username: 'mflerez', clave: '12345678'}).subscribe(
      (response) =>{
        //expect(response.json()).not.toBeNull();
        expect(response.token).toBeDefined();
      } ,
      (error) => fail(error)
    );
  }));

});
