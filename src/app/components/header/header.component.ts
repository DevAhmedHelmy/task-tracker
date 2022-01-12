import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Tasks Tracker';
  showAddTask: boolean = false;
  subscription!: Subscription;
  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService
      .toToggle()
      .subscribe((vlaue) => (this.showAddTask = vlaue));
  }

  ngOnInit(): void {}
  toggleAddTask() {
    this.uiService.toggleShowTask();
  }
  hasRoute(route: string) {
    return this.router.url === route;
  }
}
