import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.css'],
  providers: [UserService]
})
export class NewMemberComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }


  submitForm(name: string, email: string, position: string, company: string, experience: number, description: string, image: string) {
    var newUser: User = new User(name, email, position, company, experience, description, image);
    this.userService.addUser(newUser);
  }
}
