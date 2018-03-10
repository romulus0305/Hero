import { Component, OnInit,Input } from '@angular/core';
import { pLanguage } from '../pLanguage';


@Component({
  selector: 'app-language-detailes',
  templateUrl: './language-detailes.component.html',
  styleUrls: ['./language-detailes.component.css']
})
export class LanguageDetailesComponent implements OnInit {

  @Input() lang:pLanguage;


  constructor() { }
  ngOnInit() {}

}
