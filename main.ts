// if have this export so typescript knows this is a module and not a global script
export {}

const message = 'hello'

console.log(message)

//----------------------------------------
//----------------------------------------
// VARIABLE DEFINITIONS
//----------------------------------------
//----------------------------------------

// boolean, number, string, array, enum, unknown, any, void, null, undefined, never, object, tuple

const isAlexCool: boolean = true
const total: number = 17
const name: string = 'Derik'

let isGabiCool = false

// this doesnt work
isGabiCool = 'true'

// Not much use for these, they're usally used as sub types
const n: null = null
const u: undefined = undefined

const isNull: boolean = null
const myName: string = undefined

// You can declare arrays like this, either one is fine
const listOfCats1: string[] = ['boss', 'ruca', 'black cat']
const listOfCats2: Array<string> = ['boss', 'ruca', 'black cat']

// If you want an array with mixed types you can use a tuple
const tupleList1: [string, number] = ['hello', 22]
const tupleList2: [boolean, number] = [true, 22]

// You can't do this

// const tupleList3: [string, number] = [22, 'hello']

// Enums
enum Color {
    Red,
    Green,
    Blue,
}

const color1: Color = Color.Blue

// prints out the position, not very friendly
console.log(color1)

enum Color2 {
    Red = 'Red',
    Green = 'Green',
    Blue = 'Blue',
}

const color2: Color2 = Color2.Blue

console.log(color2)

// Any && unkown

let woah1: any = 17

woah1 = 'string'
woah1 = true
woah1.name = 'Tyrone'
woah1()

let woah2: unknown = 17

woah2 = 'string'
woah2.name = 'Tyrone'
woah2()

// Multiple types

let multi1: boolean | number = 2

multi1 = true
multi1 = 17

let multi2: boolean | number | string = 'Coolio'

multi2 = true
multi2 = 20
multi2 = 'Cat'

//----------------------------------------
//----------------------------------------
// VARIABLE DEFINITIONS END
//----------------------------------------
//----------------------------------------

//----------------------------------------
//----------------------------------------
// FUNCTIONS
//----------------------------------------
//----------------------------------------

const add1 = (num1: number, num2: number) => num1 + num2

add1(16, 1)
add1(16, '1')

// this right here rocks !
add1()

const add2 = (num1: number, num2: number): number => num1 + num2

// optional paremeters
const add3 = (num1: number, num2?: number): number => {
    if (!num2) return num1

    return num1 + num2
}

//----------------------------------------
//----------------------------------------
// FUNCTIONS END
//----------------------------------------
//----------------------------------------

//----------------------------------------
//----------------------------------------
// INTERFACE
//----------------------------------------
//----------------------------------------

interface Cat {
    name: string
    color: string
}

const cat1: Cat = {
    name: 'Ruca',
    color: 'orange and white',
}

const printCatHello = (catData: Cat): string => {
    return `My name is ${catData.name} and my color is ${catData.color}`
}

//----------------------------------------
//----------------------------------------
// INTERFACE END
//----------------------------------------
//----------------------------------------
