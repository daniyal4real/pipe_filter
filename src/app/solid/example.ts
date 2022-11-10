class Cars {
  wheels: number = 0

  drive() {
    return "Driving"
  }

}


class BMW extends Cars{
  override drive(){
    return "Riding"
  }
}


let bmw1 = new BMW()
bmw1.drive()
