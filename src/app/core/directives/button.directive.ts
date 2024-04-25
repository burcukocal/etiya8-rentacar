import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appButton]',
  standalone: true,
})
export class ButtonDirective implements OnInit {
  @Input("appButton") bgColor: string = 'aqua';
  @Input() color = 'white';
  @Input() buttonName = "Customers"

  constructor(
    private element: ElementRef<HTMLElement>,
    private renderer: Renderer2

  ) {}

  ngOnInit() {
    const button = document.createElement('button');
    // button.style.backgroundColor ='aqua';
    // button.style.color = 'white';


    // this.element.nativeElement.style.color=this.color
    // this.element.nativeElement.style.backgroundColor = this.bgColor;
    // this.element.nativeElement.innerHTML = this.buttonName;

    this.renderer.addClass(this.element.nativeElement, 'menu-button');
    this.renderer.addClass(this.element.nativeElement, 'btn');
    this.renderer.addClass(this.element.nativeElement, 'btn-outline-primary');
    this.renderer.addClass(this.element.nativeElement, 'btn-lg');

  }
}
