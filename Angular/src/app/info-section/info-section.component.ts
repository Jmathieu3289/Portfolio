import { Component, Input } from '@angular/core';

@Component({
  selector: 'jm-info-section',
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.scss']
})
export class InfoSectionComponent {

  @Input() logo: string = '';
  @Input() framework: string = '';
  
  showingInfo = false;
}
