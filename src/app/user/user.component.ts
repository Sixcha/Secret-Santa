import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() user!: string
  @Output() onDeleteClicked = new EventEmitter<string>()

  emitDelete(user: string) {
    this.onDeleteClicked.emit(user)
  }

}
