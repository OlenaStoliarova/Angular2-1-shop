import { InjectionToken } from '@angular/core';

export interface Constants {
    app: string;
    ver: string;
    API_URL: string;
  }

export const CONSTANTS: Constants = {
    app: 'BirdsShop',
    ver: '1.0',
    API_URL: 'http://...'
};

export const ConstantsService = new InjectionToken<Constants>('ConstantsService token');
// linter
