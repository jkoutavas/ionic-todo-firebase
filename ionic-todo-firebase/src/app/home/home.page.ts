import { Component } from '@angular/core';

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
