import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'the sky is blue';

  public items: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.items = db.collection('/parties').valueChanges();
  }
}
