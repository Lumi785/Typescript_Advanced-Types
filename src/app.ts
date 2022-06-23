//define an Admin type which is an
//object type, this is not creating
//an object here, we are defining a type.
//here can be done with interface as well
type Admin = {
  name: string;
  privileges: string[];
};

//define an Employee type
type Employee = {
  name: string;
  startDate: Date;
};

type UnkownEmployee = Employee | Admin;

//Line21 and Line22 shows errors because emp might not
//has e.g privileges property if it happens to be Employee type
// other than Admin type
// function printEmployeeInformation(emp: UnkownEmployee) {
//   console.log("Name: ", emp.name);
//   console.log("Privileges : ", emp.privileges);
//   console.log("startDate: ", emp.startDate);
// }
function printEmployeeInformation(emp: UnkownEmployee) {
  console.log("Name: ", emp.name);
  if ("privileges" in emp) {
    console.log("Privileges : ", emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("startDate: ", emp.startDate);
  }
}

//create a new type based on the above
//two types
type ElevatedEmployee = Admin & Employee;

//create an object with ElevatedEmployee type
const e1: ElevatedEmployee = {
  name: "Rose",
  privileges: ["create-server"],
  startDate: new Date(),
};

printEmployeeInformation(e1);
printEmployeeInformation({ name: "Mika", startDate: new Date() });

//Below is demonstrating an intersection type created from
// 2 union types

//create an union type
type Combinable = string | number;

//create an union type
type Numeric = boolean | number;

//create an intersection type from two union types
//The Universal type now is number type,
// because it takes the common part of the two union types.
// Line46 and Line47 both shows error!!!
type Universal = Combinable & Numeric;

const aa: Universal = 3;
// const bb: Universal = false;
// const cc: Universal = "3";

// shows error because Combinable is a string or a number,
//not know for sure what it is, shoulb be chekced, see below
// function add(a: Combinable, b: Combinable){
//   return a + b;
// }

//Line56 is a type guard, using typeof
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}
