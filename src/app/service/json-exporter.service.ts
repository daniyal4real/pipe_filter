import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonExporterService {

  constructor() { }


  inputData = {
    weather: {
      is_sunny: true,
      temp: '+25'
    }
  }


  temperature = {degree: '+24', description: 'sunny'}

  export() {
    let data = JSON.stringify(this.inputData)

    let dataURI = 'data:application/json;charset=utf-8,' + encodeURIComponent(data)

    let exportFileName = 'weather.json'

    let linkElement = document.createElement('a')

    linkElement.setAttribute('href', dataURI)
    linkElement.setAttribute('download', exportFileName)
    linkElement.click()
  }

}
