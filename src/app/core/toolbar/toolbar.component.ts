import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  labTitle = 'ngrx-data-lab';
  labState = 'Using the redux pattern with NgRx Data!';
}
