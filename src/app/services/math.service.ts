import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  constructor() { }

  soma(a: number, b: number) {
    console.log(`Somando ${a} + ${b}`)
    return a + b    
  }
}
