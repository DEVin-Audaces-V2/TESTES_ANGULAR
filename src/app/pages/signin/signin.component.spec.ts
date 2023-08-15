import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninComponent } from './signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninComponent ],
      imports: [FormsModule, ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
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
  
});
