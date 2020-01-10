import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class AppHeaderComponent {
  currentLink = 'recipeList';

  @Output() toggleView = new EventEmitter<{ linkTo: string }>();

  onToggleView = (linkTo) =>
    this.toggleView.emit({linkTo: this.currentLink});

  changeLink = (link: string) => {
    this.currentLink = link;
    this.onToggleView(link);
  }
}
