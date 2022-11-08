import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor() { }

  films = [
    {id: 1, title: "Star Wars", rating: 10, date: '05-15-2010', image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/6cd691e19fffbe57b353cb120deaeb8f_8489d7bf-24ba-4848-9d0f-11f20cb35025_500x749.jpg?v=1573613877"},
    {id: 2, title: "Jurasic Period", rating: 7.5, date: '06-16-2016', image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/e50345d7cfee907ad63bb835109b37b9_263eaa00-ac40-4a0e-b2d7-86bb4ac69c90_500x749.jpg?v=1573584652"},
    {id: 3, title: "Raiders", rating: 8.8, date: '07-17-2011', image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/609df06d7c2b5fb3125f16a7e4e34152_592ed277-d9d9-4400-af4b-f793370e5f54_500x749.jpg?v=1573616163"},
    {id: 4, title: "Ghosts", rating: 9.2, date: '08-18-2012', image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/cedcf0e4209895fce418196e333507ad_54154c41-79c2-4688-93e6-88283b8cfd36_500x749.jpg?v=1573592554"}
  ]

  getAll() {
    for(var i=0; i<this.films.length; i++) {
      console.log(this.films[i])
    }
  }
}
