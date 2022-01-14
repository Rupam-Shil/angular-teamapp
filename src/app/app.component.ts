import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  newMemberName = '';
  members: string[] = [];
  errorMessage = '';
  noOfTeams: number | '' = '';
  teams: string[][] = [];

  addMember() {
    if (!this.newMemberName) {
      this.errorMessage = "Name can't be empty";
      return;
    }
    this.errorMessage = '';

    this.members.push(this.newMemberName);
    this.newMemberName = '';
  }
  onInput(member: string) {
    this.newMemberName = member;
  }
  onNumberOfTeamsInput(value: string) {
    this.noOfTeams = parseInt(value);
  }
  generateTeams() {
    if (!this.noOfTeams || this.noOfTeams <= 0) {
      this.errorMessage = "Team can't be empty or 0 or negative";
      return;
    }
    if (this.members.length < this.noOfTeams) {
      this.errorMessage = 'Not enought no';
      return;
    }
    this.errorMessage = '';

    const refMembers = [...this.members];
    let i = 0;
    while (refMembers.length != 0) {
      if (i > this.noOfTeams - 1) {
        i = 0;
      }
      let randomNum = Math.floor(Math.random() * refMembers.length);
      let valueToPush = refMembers.splice(randomNum, 1)[0];

      if (this.teams[i]) {
        this.teams[i].push(valueToPush);
      } else {
        this.teams[i] = [valueToPush];
      }
      i++;
    }
  }
}
