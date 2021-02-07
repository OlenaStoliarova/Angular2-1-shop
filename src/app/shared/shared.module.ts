import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { ZoomDirective } from './directives/zoom.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HighlightDirective, ZoomDirective],
  exports: [HighlightDirective, ZoomDirective]
})
export class SharedModule { }
