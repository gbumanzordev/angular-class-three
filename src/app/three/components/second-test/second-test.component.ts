import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-test',
  templateUrl: './second-test.component.html',
  styleUrls: ['./second-test.component.scss']
})
export class SecondTestComponent implements OnInit {

  @Output() notify = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  notifyParent() {
    this.notify.emit(2 * 2);
  }

  redirect() {
    this.router.navigate(['/first-test']);
  }

}
