import { Component, Injector, ViewChild } from '@angular/core';
import { FactoryService } from './factory.service';

import { MyAnchorDirective } from './my-anchor.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'comp-factory';

  @ViewChild(MyAnchorDirective, { static: true })
  appMyAnchor: MyAnchorDirective;

  constructor(injector: Injector, public myInputCell: FactoryService) {}
}
