import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding('style.backgroundColor')
  bgColor: string;

  private oldBgColor: string;

  @HostListener('mouseenter')
  enter() {
    this.oldBgColor = this.bgColor;
    this.bgColor = 'red';
  }

  @HostListener('mouseleave')
  leave() {
    this.bgColor = this.oldBgColor;
  }

}
