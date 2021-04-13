import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './directives/highlight.directive';
import { ZoomDirective } from './directives/zoom.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { EmailDirective } from './validators';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HighlightDirective,
    ZoomDirective,
    OrderByPipe,
    EmailDirective
  ],
  exports: [
    CommonModule,
    FormsModule,
    HighlightDirective,
    ZoomDirective,
    OrderByPipe,
    EmailDirective
  ]
})
export class SharedModule { }
