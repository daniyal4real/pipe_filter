import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../../service/profile.service";

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  login = ""
  password = ""
  repeatedPassword = ""

  constructor(
    private service: ProfileService
  ) { }

  ngOnInit(): void {
  }

  register() {
    if (this.login != "" && this.password == this.repeatedPassword) {
      this.service.profiles.set(this.login, this.password)
      alert("Success")
    } else {
      alert("Ошибка")
    }
  }

}
