import { Component, OnInit } from '@angular/core';
import { pLanguage } from '../pLanguage';
import { listOfLanguages } from '../listOfLanguages';


@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {


programmingLanguages = listOfLanguages;
selectedLng:pLanguage;
language:pLanguage = {id:1,name:'NodeJS',expirience:0};

selectedLanguage(lng:pLanguage){
  this.selectedLng = lng;
}

  constructor() {}
  ngOnInit() {}

}
