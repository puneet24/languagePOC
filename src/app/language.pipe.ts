import { Pipe, PipeTransform } from '@angular/core';
import { AppService } from './app.service';

@Pipe({
  name: 'language'
})
export class LanguagePipe implements PipeTransform {

  constructor(public appService: AppService) {}

  transform(value: any, args?: any): any {
    console.log(this.appService.DATA);
    console.log("value", value);
    console.log("args", args);
    let text = this.appService.DATA[value][this.appService.selectedLanguage];
    console.log(text);
    return text;
  }

}
