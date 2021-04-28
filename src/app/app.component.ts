import { Component, Injector } from '@angular/core';
import { FactoryService } from './factory.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'comp-factory';

  constructor(injector: Injector, public myInputCell: FactoryService) {}
}
