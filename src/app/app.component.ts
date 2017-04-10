import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  { id: 11, name: 'Hero 1' },
  { id: 12, name: 'Hero 2' },
  { id: 13, name: 'Hero 3' },
  { id: 14, name: 'Hero 4' },
  { id: 15, name: 'Hero 5' },
  { id: 16, name: 'Hero 6' },
  { id: 17, name: 'Hero 7' },
  { id: 18, name: 'Hero 8' },
  { id: 19, name: 'Hero 9' },
  { id: 20, name: 'Hero 10' }
];

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // template: ``
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
