import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CONSTANTS, ConstantsService } from './services/constants.service';
import { GeneratedString, GeneratorFactory } from './services/generator.factory';
import { GeneratorService } from './services/generator.service';
import { LocalStorage, LocalStorageService } from './services/local-storage.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
        { provide: ConstantsService, useValue: CONSTANTS },
        { provide: GeneratedString, useFactory: GeneratorFactory(15), deps: [GeneratorService] },
        { provide: LocalStorageService, useValue: LocalStorage }
    ]
})
export class CoreModule { }
