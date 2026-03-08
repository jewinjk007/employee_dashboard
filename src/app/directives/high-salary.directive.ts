import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({ selector: '[appHighSalary]', standalone: true })
export class HighSalaryDirective implements OnChanges {
  @Input('appHighSalary') salary = 0;
  @Input() threshold = 80000;

  constructor(private el: ElementRef<HTMLElement>, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.salary && this.salary > this.threshold) {
      this.renderer.setStyle(this.el.nativeElement, 'background', 'rgba(255,235,59,0.12)');
      this.renderer.setStyle(this.el.nativeElement, 'border-left', '4px solid #FFC107');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'background');
      this.renderer.removeStyle(this.el.nativeElement, 'border-left');
    }
  }
}
