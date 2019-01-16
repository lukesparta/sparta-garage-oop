
//Car Object Constructor
function Car(make, model, year, color, doors, engineSize){
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.doors = doors;
  this. engineSize = engineSize;
}

//Garage Class
class Garage{

  constructor(name, location, founded, employees){
    this.name = name;
    this.location = location;
    this.founded = founded;
    this.employees = employees;
  }

  createGarage(){
    console.log(`${this.name} is a garage located in ${this.location}. It was founded in ${this.founded} and now has ${this.employees} employees.`)
  }

  carBuilder(){
    let create = true;

    while(create === true){
      //creating a new car and using prompt for user input to collect the values for the Car constructor object.
      const car = new Car(prompt("Make"), prompt("Model"), prompt("Year"), prompt("Color"), prompt("Doors"), prompt("Engine Size"));

      //Logging results to console
      console.log(`New car created\n\nMake: ${car.make}\nModel: ${car.model}\nYear: ${car.year}\nColor: ${car.color}\nDoors: ${car.doors}\nEngine Size: ${car.engineSize}`);

      //Logging results to prompt and asking user if they wasnt to create another car?
      var newCar = prompt(`New car created\n\nMake: ${car.make}\nModel: ${car.model}\nYear: ${car.year}\nColor: ${car.color}\nDoors: ${car.doors}\nEngine Size: ${car.engineSize}\n\nWould you like to create another car?`);

      if(newCar.toLowerCase() === 'yes'){
        create = true;
      }
      else{
        create = false;
      }
    }
  }
}

//Creating a new garage
const garage = new Garage("Workspace", "London", 1990, 10);

//Creating a car in the newly created garage using the carBuilder method.mm
garage.carBuilder();




