import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }

  set(key: string, value: string): void {
    window.localStorage.setItem(key, value);
  }

  get(key: string): string {
    return window.localStorage.getItem(key);
  }

  remove(key: string): void {
    window.localStorage.removeItem(key);
  }

  clear(): void {
    window.localStorage.clear();
  }
}

export const LocalStorage = new LocalStorageService();
