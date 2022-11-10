import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay()
    return day !== 0
  }

  user_date: any = []

  onClick(value: any) {
    console.log(value)
    this.user_date.push(value)
    console.log(this.user_date)
  }

}
