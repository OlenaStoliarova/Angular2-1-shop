import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective {
  @Input('appZoom') fontSize: string;

  private toggle = true;

  constructor(private hostElement: ElementRef,
              private render: Renderer2) { }

  @HostListener('click')
  onClick() {
    if(this.toggle) {
      this.render.setStyle(this.hostElement.nativeElement, 'font-size', this.fontSize);
    } else {
      this.render.setStyle(this.hostElement.nativeElement, 'font-size', 'medium');
    }
    this.toggle = !this.toggle;
  }
  
}
