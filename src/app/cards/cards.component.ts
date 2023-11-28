import { Component, Input } from '@angular/core';
import { giftee } from '../main/main.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  @Input() giftee!: giftee
  revealed: boolean = false
  done: boolean = false

  revealUser() {
    if (this.revealed === true)
      this.done = true
    this.revealed = true
  }
}
