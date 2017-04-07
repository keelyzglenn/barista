import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { BaristaListComponent } from './barista-list/barista-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AdminComponent } from './admin/admin.component';
import { NewMemberComponent } from './new-member/new-member.component';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { PositionPipe } from './position.pipe';

export const firebaseConfig = {
   apiKey: "AIzaSyBBWT-ESKM5MA6usDzkbohH6HBH-yJdQ2o",
   authDomain: "barista-club.firebaseapp.com",
   databaseURL: "https://barista-club.firebaseio.com",
   projectId: "barista-club",
   storageBucket: "barista-club.appspot.com",
   messagingSenderId: "247013506830"
 };


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    BaristaListComponent,
    UserProfileComponent,
    AdminComponent,
    NewMemberComponent,
    EditMemberComponent,
    PositionPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
