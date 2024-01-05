import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  activeSection: string = '';

  constructor() { }

  toggleSection(section: string) {
    this.activeSection = this.activeSection === section ? '' : section;
  }
}
