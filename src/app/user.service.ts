import { Injectable } from '@angular/core';
import { User } from './user.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class UserService {
  users: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.users = angularFire.database.list('users');
  }

  getUsers() {
    return this.users;
  }

  getUserById(userId: string) {
    return this.angularFire.database.object('users/' + userId);
  }

  addUser(newUser: User) {
    this.users.push(newUser);
  }

  updateUser(localUpdatedUser) {
    var userEntryInFirebase = this.getUserById(localUpdatedUser.$key);
    userEntryInFirebase.update({name: localUpdatedUser.name,
                                email: localUpdatedUser.email,
                                position: localUpdatedUser.position,
                                company: localUpdatedUser.company,
                                experience: localUpdatedUser.experience,
                                description: localUpdatedUser.description,
                                image: localUpdatedUser.image});
  }

  deleteUser(localUserToDelete){
    var userEntryInFirebase = this.getUserById(localUserToDelete.$key);
    userEntryInFirebase.remove();
  }
}
