'use strict'

/* class MyClass {
    constructor() {
        this.names_ = [];
    }

    set name(value) {
        this.names_.push(value);
    }

    get name() {
        return this.names_[this.names_.length - 1];
    }
}

const myClassInstance = new MyClass();
myClassInstance.name = 'Joe';
myClassInstance.name = 'Bob';
myClassInstance.name = 'Ruslan';

console.log(myClassInstance.name); // logs: "Bob"
console.log(myClassInstance.names_); // logs: ["Joe", "Bob", "Ruslan"] */




/* class CoffeeMachine {
    _waterAmount = 0;
  
    set waterAmount(value) {
      if (value < 0) throw new Error("Отрицательное количество воды");
      this._waterAmount = value;
    }
  
    get waterAmount() {
      return this._waterAmount;
    }
  
    constructor(power) {
      this._power = power;
    }
  
  }
  
  // создаём новую кофеварку
  let coffeeMachine = new CoffeeMachine(100);
  
  // устанавливаем количество воды
  coffeeMachine.waterAmount = -10; // Error: Отрицательное количество воды */


  /* class CoffeeMachine {
    // ...
  
    constructor(power) {
      this._power = power;
    }
  
    get power() {
      return this._power;
    }
  
  }
  
  // создаём кофеварку
  let coffeeMachine = new CoffeeMachine(100);
  
  alert(`Мощность: ${coffeeMachine.power}W`); // Мощность: 100W
  
  coffeeMachine.power = 25; // Error (no setter) */

  

class Car {

  constructor(weels){
  this.weels = 4;
  }

}
  

class GermanCar extends Car {
  constructor(famousFirm, type){
    super(famousFirm, type);
    this.famousFirm = famousFirm;
    this.type = type;
  }

  getCarName() {
      return this.famousFirm + " " + this.type;
  }
}


class BMW extends GermanCar {
  constructor(famousFirm, quality, averagePrice) {
    super(famousFirm, quality, averagePrice);
    this.quality = quality;
    this.averagePrice = '60.000$';
  }

  getCharacteristic() {
      return this.famousFirm + ' ' + this.quality + ' ' + this.averagePrice;
  }
}

class BMWX6 extends BMW {
  constructor(model, release, averagePrice) {
    super(model, release, averagePrice)
    this.model = model;
    this.release = release;
  }

  getModelYear() {
    return 'BMWX6: ' + this.model + ', since - ' + this.release + ', cost:' + this.averagePrice;
  }
}



let BMW_x6 = new GermanCar( 'BMW', 'crossover');
alert(BMW_x6.getCarName())

let model_bmw = new BMW( 'BMW', 'world leader', this.averagePrice );
console.log(model_bmw.getCharacteristic());
console.log(model_bmw)

let competeCar = new BMWX6('crossover', '2008');
console.log(competeCar.getModelYear());


// спросить почему наследуется 