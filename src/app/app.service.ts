import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  selectedLanguage: string = "ENGLISH";
  DATA = {
    header: {
      "ENGLISH": "Your Project is accepted",
      "SPANISH": "Your Project is accepted spanish",
      "FRENCH": "Your Project is accepted french",
      "CANADIAN": "Your Project is accepted canadian"
    }
  }
  constructor() { }

  updateLanguage(language: string) {
    this.selectedLanguage = language;
  }

  getKeytext(key: string) {
    return this.DATA;
  }

}
