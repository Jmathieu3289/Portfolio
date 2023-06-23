import { Component, Input } from '@angular/core';

@Component({
  selector: 'jm-info-section',
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.scss']
})
export class InfoSectionComponent {

  @Input() logo: string = '';
  @Input() framework: string = '';
  @Input() clickable: boolean = true;
  
  showingInfo = false;

  toggleInfo(): void {
    if (this.clickable) {
      this.showingInfo = !this.showingInfo;
    }
  }
}
