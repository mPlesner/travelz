import { Dialog } from '@angular/cdk/dialog';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { Card } from '../card/card';
import { Path1Dialog } from '../path-1-dialog/path-1-dialog';

@Component({
  selector: 'app-main-page',
  imports: [Card],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {
  private readonly dialogService = inject(Dialog);

  public card1Clicked: WritableSignal<boolean> = signal(false);

  public card1Click() {
    this.dialogService.open(Path1Dialog, {
      autoFocus: false,
    });
  }
}
