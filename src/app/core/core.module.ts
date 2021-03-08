import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CONSTANTS, ConstantsService } from './services/constants.service';
import { GeneratedString, GeneratorFactory } from './services/generator.factory';
import { GeneratorService } from './services/generator.service';
import { LocalStorage, LocalStorageService } from './services/local-storage.service';
import { LoginComponent } from './components/login/login.component';
import { ForbiddenPageComponent } from './components/forbidden-page/forbidden-page.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [LoginComponent, ForbiddenPageComponent],
  providers: [
        { provide: ConstantsService, useValue: CONSTANTS },
        { provide: GeneratedString, useFactory: GeneratorFactory(15), deps: [GeneratorService] },
        { provide: LocalStorageService, useValue: LocalStorage }
    ]
})
export class CoreModule { }
