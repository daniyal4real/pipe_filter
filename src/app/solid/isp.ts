interface CarInterface {
  drive(): string

}

interface AirplaneInterface {
  fly(): string
}


class Car implements CarInterface {
  drive() {
    return 'Driving car'
  }
}

class Airplane implements CarInterface, AirplaneInterface{
  drive() {
    return 'Driving car'
  }


  fly() {
    return 'Flying'
  }
}
