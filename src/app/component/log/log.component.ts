import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../../service/profile.service";

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  constructor(private service: ProfileService) { }

  ngOnInit(): void {
  }
  login: string = ""
  password: string = ""


  signIn() {
    let rightPassword = this.service.profiles.get(this.login)

    if (this.password === rightPassword) {
      alert("Success")
    } else {
      alert("Incorrect login or password")
    }

  }


}
