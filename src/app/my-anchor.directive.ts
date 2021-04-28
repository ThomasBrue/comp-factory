import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyAnchor]',
})
export class MyAnchorDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
