import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-barista-list',
  templateUrl: './barista-list.component.html',
  styleUrls: ['./barista-list.component.css'],
  providers: [UserService]
})

export class BaristaListComponent implements OnInit {
  users: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  goToDetailPage(clickedUser) {
    this.router.navigate(['users', clickedUser.$key])
  }

}
