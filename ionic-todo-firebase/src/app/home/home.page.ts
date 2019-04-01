import { Component } from '@angular/core';

/*
This is how the https://www.javascripttuts.com/using-firebase-and-angularfire2-in-an-ionic-real-time-todo-application/
tutorial set things up, which is obsolete with breaking changes in version 5 of angularfire2
(https://github.com/angular/angularfire2/issues/1180)
(https://github.com/angular/angularfire2/blob/master/docs/rtdb/lists.md)

import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

export class HomePage {
  tasks: FirebaseListObservable<any[]>;

  constructor(public db: AngularFireDatabase) {
    this.tasks = db.list('/tasks');
  }
}

The following is how it's done now. (https://stackoverflow.com/questions/48134300/import-angularfiredatabase-firebaselistobservable-from-angularfire2-databa)
*/

import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tasksRef: AngularFireList<any>;
  tasks: Observable<any[]>;
  newTask = {name: ''};

  constructor(db: AngularFireDatabase) {
    this.tasksRef = db.list('tasks');
    // Use snapshotChanges().map() to store the key
    this.tasks = this.tasksRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  addTask(newTask: any) {
    this.tasksRef.push(newTask);
    this.newTask = {name: ''};
  }

  updateTask(task: any, name: string) {
    this.tasksRef.update(task.key, {name: name});
  }

  removeTask(task: any) {
    this.tasksRef.remove(task.key);
  }
}
