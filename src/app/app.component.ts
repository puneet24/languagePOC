import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  selectedLanguage: string;
  languageOptions: Array<string> = ["ENGLISH", "SPANISH", "FRENCH", "CANADIAN"];
  headerKey: string = "header";

  constructor(public appService: AppService) {
    this.selectedLanguage = appService.selectedLanguage;
  }

  updateLanguage(e: any) {
    this.selectedLanguage = e.target.value;
    this.appService.updateLanguage(this.selectedLanguage);
  }
}
