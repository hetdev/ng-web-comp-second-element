import {Component, Input, OnChanges, OnInit, SimpleChange} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'ng-web-comp-second-element';

  @Input() token: string;

  constructor() {
    console.log('token constructor=' + this.token);
  }
  ngOnInit() {
    console.log('token ngOnInit=' + this.token);

    window.addEventListener('changeNameToCustomEvent', (event) => {
      console.log('Se escucha el evento');

    }, false);

    const el = document.querySelector('ng-web-comp-first-element');
    el.addEventListener('changeNameToEventEmit', e => {
      console.log('Se escucha el evento changeNameToEventEmit document');
    });
  }



  ngOnChanges(changes: {[token: string]: SimpleChange}) {
    // check the object "changes" for new data
    console.log('token ngOnChanges=' + this.token);
  }
}
