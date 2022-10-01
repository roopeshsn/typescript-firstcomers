/* why typescript?
    - static typing
    - code completion
*/

let peyar: string = "Roopesh"
if (peyar == "Roopesh") peyar = peyar + "B"
console.log(peyar)

// static typing
// assigning explicit types
let sum: number = 0
let mul: number = 1
let arr: number[] = [1, 2, 3, 4, 5]

arr.forEach((number) => (sum += number))
arr.forEach((number) => (mul *= number))

let arrMulWithTwo: number[] = arr.map((number) => number * 2)

console.log(sum)
console.log(mul)
console.log(arrMulWithTwo)

// Tuple
let user: [string, number] = ["Udhaya", 21]
console.log(user)

//Enum
enum Size {
  Small = 1,
  Medium,
  Large,
}
let shirt: Size = Size.Small
console.log(Size)
console.log(shirt)

/* functions 
function name(val: datatype): return datatype
*/
function calculateTax(income: number, year: number = 2022): number {
  if (year <= 2022) return 0
  return income * 0.25
}

let tax: number = calculateTax(250000)
console.log(tax)

// type aliases
type Student = {
    readonly id: number,
    name: string, 
    age: number, 
    actual: number, 
    calculatePercentage: (actual: number, total: number) => number
}

// objects
let student: Student = {
    id: 1,
    name: "Roopesh",
    age: 21,
    actual: 457,
    calculatePercentage: (actual: number ,total: number = 500) => {
      return (actual / total) * 100
    }
}

// classes
class Friend {
  private peyar: string
  private age: number
  private college: string
  private distance: number

  constructor(peyar: string, age: number, college: string, distance: number) {
    this.peyar = peyar
    this.age = age
    this.college = college
    this.distance = distance
  }

  format() {
    console.log(`${this.peyar} is ${this.age}, studying in ${this.college} and travelling ${this.distance}kms everyday`)
  }

  calculateTotalDistance(distance: number) {
    return distance * 2
  }
}

let pdmnhn = new Friend("Padmanabhan", 21, "MIT", 35)
let udhaya = new Friend("Udhaya", 21, "BSACIST", 5)
pdmnhn.format()
udhaya.format()

let friends: Friend[] = []
friends.push(pdmnhn)
friends.push(udhaya)
console.log(friends)

// Generics
// works with all datatypes
function removeFirstEntryFromArr<T>(arr: T[]): T[] {
  return arr.splice(1);
}
const strArr: string[] = ['a', 'b', 'c'];
const numArr: number[] = [1, 2, 3];
const newStrArr = removeFirstEntryFromArr(strArr);
const newNumArr = removeFirstEntryFromArr(numArr);
console.log(newStrArr)
console.log(newNumArr)

/*
My thoughts:
TypeScript is a tool which is used to write clean code with best practices.
*/
