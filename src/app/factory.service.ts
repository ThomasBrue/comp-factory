import {
  ApplicationRef,
  ComponentFactoryResolver,
  Injectable,
  Injector,
} from '@angular/core';
import { InputCellComponent } from './input-cell/input-cell.component';

@Injectable({
  providedIn: 'root',
})
export class FactoryService {
  constructor(
    private injector: Injector,
    private applicationRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  showAsComponent(message: string) {
    // Create element
    const popup = document.createElement('popup-component');

    // Create the component and wire it up with the element
    const factory = this.componentFactoryResolver.resolveComponentFactory(
      InputCellComponent
    );
    const myInputRef = factory.create(this.injector, [], popup);

    console.log(factory.inputs);

    // Attach to the view so that the change detector knows to run
    this.applicationRef.attachView(myInputRef.hostView);

    // Listen to the close event
    /*     myInputRef.instance.closed.subscribe(() => {
      document.body.removeChild(popup);
      this.applicationRef.detachView(myInputRef.hostView);
    }); */

    // Set the message
    myInputRef.instance.message = message;

    // Add to the DOM
    document.body.appendChild(popup);
  }
}
