import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  constructor() { }

  generate(resultLength: number): string {
    const allowedChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < resultLength; i++) {
      result += allowedChars.charAt(Math.floor(Math.random() * allowedChars.length));
    }
    return result;
  }
}
