import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [UserService]
})

export class UserProfileComponent implements OnInit {
  userId: string;
  userToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private userService: UserService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.userId = urlParameters['id'];
    });
    this.userToDisplay = this.userService.getUserById(this.userId);
  }

}
