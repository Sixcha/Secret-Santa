import { Component } from '@angular/core';

export interface giftee {
  user: string,
  giftee: string
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  userNames: string[] = []
  userNamesForGifts: string[] = []
  lockedIn: boolean = false
  started: boolean = false
  giftees: giftee[] = []

  addUser(name: string) {
    if (this.userNames.indexOf(name) === -1 && name !== "" && this.lockedIn === false) {
      this.userNames.push(name)
      this.userNamesForGifts.push(name)

    }
  }

  deleteUser(user: string) {
    if (this.lockedIn === false) {
      this.userNames.splice(this.userNames.indexOf(user), 1)
      this.userNamesForGifts.splice(this.userNamesForGifts.indexOf(user), 1)
    }
  }

  lockIn() {
    this.lockedIn = true
  }


  shuffle(array: string[]) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex > 0) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  startSanta() {
    const gifteeArray = this.shuffle(this.userNamesForGifts)
    let giftee: giftee
    for (let i = 0; i < this.userNames.length; i++) {
      if (this.userNames[i] !== gifteeArray[0]) {
        giftee = { user: this.userNames[i], giftee: gifteeArray[0] }
        gifteeArray.splice(0, 1)
        this.giftees.push(giftee)
      }
      else {
        giftee = { user: this.userNames[i], giftee: gifteeArray[1] }
        gifteeArray.splice(1, 1)
        this.giftees.push(giftee)
      }
    }
    this.started = true

  }



}
