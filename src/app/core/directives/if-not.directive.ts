import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfNot]',
  standalone: true,
})
export class IfNotDirective {
  @Input('appIfNot') set condition(value: boolean) {
    //setter
    if (!value) {
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(this.template);
    } else this.viewContainer.clear();
  }

  constructor(
    private template: TemplateRef<HTMLElement>,
    private viewContainer: ViewContainerRef
  ) {}
}
