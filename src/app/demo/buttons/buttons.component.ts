import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
    <button mat-button color="primary">Primary Button</button>
    <button mat-button color="accent">Accent Button</button>
    <button mat-button color="warn">Warn Button</button>

    <mat-icon >home</mat-icon>
    <mat-icon >face</mat-icon>

    <button mat-button color="primary">
      <mat-icon >delete_forever</mat-icon><span>Delete Forever</span>
    </button>

    <mat-checkbox>Check me</mat-checkbox>
  `,
  styles: [
  ]
})
export class ButtonsComponent {

}
