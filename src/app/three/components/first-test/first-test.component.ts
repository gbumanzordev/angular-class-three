import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { takeUntil, take, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-first-test',
  templateUrl: './first-test.component.html',
  styleUrls: ['./first-test.component.scss'],
})
export class FirstTestComponent implements OnInit, OnDestroy {
  observable$ = new BehaviorSubject(1);
  phone = 5;
  obtainedNumber = 0;
  subject$ = new Subject();
  constructor(private router: Router) {
    setInterval(() => {
      this.observable$.next(this.observable$.value + 1);
    }, 1000);
  }

  ngOnInit(): void {
    this.observable$.pipe(
      debounceTime(500),
      distinctUntilChanged())
      .subscribe((response) => {
      this.obtainedNumber = response;
      console.log(this.obtainedNumber);
    },
    (error) => {
      // error messages go here
    });
  }

  getValue(duplicatedNumber: number) {
    this.obtainedNumber = duplicatedNumber;
  }

  navigate() {
    this.router.navigate(['/second-test']);
  }

  ngOnDestroy() {
    this.subject$.next();
    this.subject$.complete();
  }
}
