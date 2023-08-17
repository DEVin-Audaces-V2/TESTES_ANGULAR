import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninComponent } from './signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  let router: Router;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SigninComponent],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [AuthService]
    }).compileComponents();

    fixture = TestBed.createComponent(SigninComponent);

    component = fixture.componentInstance;


    router = TestBed.inject(Router)
    authService = TestBed.inject(AuthService)

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Rotina de teste para avaliar se os inputs de email e senha estão aparecendo em tela
  it('mostrando campos de email e senha', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[type="email"]')).toBeTruthy()
    expect(compiled.querySelector('input[type="password"]')).toBeTruthy()
  })

  // Rotina de teste para avaliar se o método 'login' é chamado após o clique no botão
  it('call login when the button is clicked', () => {
    spyOn(component, 'login')
    const compiled = fixture.nativeElement;
    const button = compiled.querySelector('button');
    button.click()
    expect(component.login).toHaveBeenCalled()
  })

  // 1 - Teste de validação de formulario (loginForm)
  it('Teste de validação de formulario (loginForm)', () => {
    component.loginForm.setValue({
      email: 'user',
      password: ''
    })

    spyOn(console, 'log')

    component.login()

    expect(console.log).toHaveBeenCalledWith('Form inválido')
  })

  // 2 - Teste de email/senha incorretos
  it('Teste de email/senha incorretos', () => {
    component.loginForm.setValue({
      email: 'user@mail.com',
      password: '00000000'
    })

    spyOn(console, 'log')

    component.login()

    expect(console.log).toHaveBeenCalledWith('Login failed')
  })

  // 3 - Login com sucesso
  it('Login com sucesso', () => {
    // Preencha o formulário de login com valores válidos
    component.loginForm.setValue({
      email: 'user@mail.com',
      password: '123456'
    });

    // Espiona o método login do serviço authService
    spyOn(authService, 'login').and.returnValue(Promise.resolve(true));

    // Espiona o método navigateByUrl do router
    const navigateByUrlSpy = spyOn(router, 'navigateByUrl');

    // Chame o método login() do componente
    component.login();

    // Verifique se o método navigateByUrl foi chamado com o valor esperado
    expect(navigateByUrlSpy).toHaveBeenCalledWith('/home');;
  })
});
