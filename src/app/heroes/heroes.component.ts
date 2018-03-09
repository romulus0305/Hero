import { Component, OnInit } from '@angular/core';
import { hero } from "../hero";
import { ManyHEROES } from "../mock-heroes";


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = ManyHEROES;
  selectedHero:hero;
  hero:hero = {
  id:1,
  name:'SuperBoban'
  };

onSelect (heroj:hero){ this.selectedHero = heroj};

  constructor() { }
  ngOnInit() {}

}

