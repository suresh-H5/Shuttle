import { Component, OnInit, isDevMode } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shuttle-infra';
  currentRoute = '';
  constructor(private router: Router) {
    router.events.subscribe((val) => {
      this.currentRoute = router.url;
    });
  }

  ngOnInit() {
  }
}
