import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { UserService } from '../user.service';
import { routing } from '../app.routing';
import { User } from '../user.model';

@Component({
  selector: 'app-barista-list',
  templateUrl: './barista-list.component.html',
  styleUrls: ['./barista-list.component.css'],
  providers: [UserService]
})

export class BaristaListComponent implements OnInit {
  users: FirebaseListObservable<any[]>;

  constructor(private router: Router, private userService: userService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

}
