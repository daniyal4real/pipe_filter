import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BeverageService} from "./service/beverage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'lesson-pipes';

  currentBeverage = "coffee"

  constructor(
    public beverageService: BeverageService
  ) {
  }




  addBeverage(newBeverage: string) {
    this.beverageService.addBeverage(newBeverage)
    console.log(newBeverage)
  }

  transform(value: string, prefix: string, operator: 'uppercase' | 'lowercase' = 'uppercase'): string {

    console.log('AppComponent', value)

    value = !value ? prefix : prefix + ' ' + value

    switch (operator) {
      case "uppercase":
        return value.toUpperCase()
      default:
        return value.toLowerCase()
    }


  }
}
