import { Component } from '@angular/core';

/*
This is how the https://www.javascripttuts.com/using-firebase-and-angularfire2-in-an-ionic-real-time-todo-application/
tutorial set things up, which is obsolete with version 5.1.2 of angularfire2

import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

export class HomePage {
  tasks: FirebaseListObservable<any[]>;

  constructor(public db: AngularFireDatabase) {
    this.tasks = db.list('/tasks');
  }
}
*/

import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tasks: Observable<any[]>;

  constructor(public db: AngularFireDatabase) {
    this.tasks = db.list('/tasks').valueChanges();
  }
}
