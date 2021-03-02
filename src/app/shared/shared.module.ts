import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './directives/highlight.directive';
import { ZoomDirective } from './directives/zoom.directive';
import { OrderByPipe } from './pipes/order-by.pipe';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HighlightDirective,
    ZoomDirective,
    OrderByPipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    HighlightDirective,
    ZoomDirective,
    OrderByPipe
  ]
})
export class SharedModule { }
