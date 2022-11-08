import { Component, OnInit } from '@angular/core';
import {FilmService} from "../../service/film.service";

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  constructor(
    public filmService: FilmService
  ) { }

  ngOnInit(): void {
  }

  getAllFilms() {
    this.filmService.getAll();
  }

}
