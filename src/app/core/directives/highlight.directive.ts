import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective implements OnInit {
  @Input("appHighlight") bgColor: string = 'yellow';
  @Input("appHighlightThen") secondBgColor: string = 'yellow';
  @Input() color = 'black';
  //input kullanılacaksa constructorda değil ngOnInit içinde yapılır.

  constructor(private element: ElementRef<HTMLElement>) {}

  ngOnInit() {
    const span = document.createElement('span');
    span.style.backgroundColor ='yellow';
    span.style.color = 'black';
    span.innerText = ' On Sale!';

    this.element.nativeElement.appendChild(span);

    this.element.nativeElement.style.color=this.color
    this.element.nativeElement.style.backgroundColor = this.bgColor;

    this.element.nativeElement.onclick = () => {
      alert("You clicked me!")
    }
  }

  @HostListener('mouseenter')
  onMouseEnter(){
    this.element.nativeElement.style.backgroundColor = 'lightblue'
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.element.nativeElement.style.backgroundColor = this.bgColor;
  }
}
