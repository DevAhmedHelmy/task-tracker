import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Tasks Tracker';
  showAddTask: boolean = false;
  subscription!: Subscription;
  constructor(private uiService: UiService) {}

  ngOnInit(): void {}
  toggleAddTask() {
    this.uiService.toggleShowTask();
  }
}
