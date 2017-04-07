import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css'],
  providers: [UserService]
})
export class EditMemberComponent implements OnInit {

  @Input() selectedUser;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  beginUpdatingUser(userToUpdate){
    this.userService.updateUser(userToUpdate);
  }

  beginDeletingUser(userToDelete){
    if(confirm("Are your sure you want to delete this barista?")){
      this.userService.deleteUser(userToDelete);
    }
  }

}
