interface Shape {
  area() :number;
}

class Rectangle implements Shape{

  constructor(
    private _width: number,
    private _height: number
  ) {}

   public area(): number {
    return this._height * this._width
  }
}

class Square implements Shape{
  constructor(
    private _height: number
  ) {}

  area(): number{
    return Math.pow(this._height, 2)
  }
}

class AreaCalculator {
  private shape: Shape[]

  constructor(shape: Shape[]) {
    this.shape = shape
  }

  public sum(): number {
    return this.shape.reduce((acc, shape)=>acc+= shape.area(), 0)
  }
}

let rec = new Rectangle(2, 3)
let list = [rec]
let ac = new AreaCalculator(list)
console.log(ac.sum())
