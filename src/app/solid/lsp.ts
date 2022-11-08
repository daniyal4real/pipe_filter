interface Shape {
  area() :number;
}


class Rectanglee implements Shape{

  constructor(
    private _width: number,
    private _height: number
  ) {}

  public area(): number {
    return this._height * this._width
  }
}



class Squaree implements Shape{
  constructor(
    private _height: number
  ) {}

  area(): number{
    return Math.pow(this._height, 2)
  }
}


let sq = new Squaree(5)
console.log(sq.area())
