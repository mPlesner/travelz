import { NgClass } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';
import { Card } from '../card/card';

@Component({
  selector: 'app-main-page',
  imports: [Card, NgClass],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {
  public card1Clicked: WritableSignal<boolean> = signal(false);

  public card1Click() {
    this.card1Clicked.set(!this.card1Clicked());
  }
}
