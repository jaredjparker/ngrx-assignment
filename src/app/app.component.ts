import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setUsername, reset } from './core/actions/core.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'redux-assignment';
  username$: Observable<string>;

  constructor(private store: Store<{ username: string }>) {
    this.username$ = store.pipe(select('username'));
  }

  setUsername() {
    this.store.dispatch(setUsername());
    console.log(this.store)
  }

  reset() {
    this.store.dispatch(reset());
  }


}
