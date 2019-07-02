# TypeScprit Note

Typescript is a wraper around javascript. TypeScript must be compiled before running in the browswer.

Pros:
- make code easy to maintain.


command to compile ts: tsc script.ts


install lite-server: npm install lite-server --save-dev

command to init a tsc config file; after running the initialization , we will be able to compile the whole project with jst the command: tsc
	tsc --init


## TypeScript Types
typescript is a static type language. which means that you could not pass a number to a string variable.

- string
- number
- boolean
- array
- tuple
- enum
- any
- function
- object
- nerver
- Nullable


variable initialization:

```javascript
let s: string = 'hello world';
let i: number: = 0;
let isNumber: boolean = true;
let arr: string[] = ['a', 'b'];
let arr: any[] = [1, 'b'];
let address: [string, number] = ["Superstreet", 99];
enum Color {
    Gray,   // 0
    Green,  // 1
    Blue    // 2
}, 
let myColor = Color.Green:
console.log(myColor) // === 1

enum Color {
    Gray,         // 0
    Green = 100,  // 100
    Blue          // 101
},

let anyType: any = 'a';
anyType = 2;

// specify the return value as string.
function returnMyName(): string {
    return myName;
}

function returnMyName(): void {
    console.warn(myNmae)
}

// specify variable type
function returnNumber(a: number, b: number): number {
    return a * b;
}

// set function type: this function type should take 2 number variables and return a number.
let myFunciton: (val1: number, val2: number) => number;

let obj = {
    name: "Wei",
    age: 100
}

obj = {} // error: parameters do not match
obj = {  // error: parameters do not match
    a: "wei",
    b: 20
}

let obj: { name: string, age: number} = {
    name: "Wei",
    age: 100
}

let complex: {data: number[], output: (all: boolean) => number[]} = {
    data: [100, 3.99, 10],

    output: function(all: boolean): number[] {
        return this.data;
    }
}

// type alias
type Complex = {data: number[], output: (all: boolean) => number[]};

let complex2: Complex = {
    data: [100, 3.99, 10],
    output: function(all: boolean): number[] {
        return this.data;
    }
}

// union types:
let myAge: number | string = '100';
myAge = 100;
myAge = {age: 100} // error.

// never type



// nullable type
let canBeNull = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;

// in tsconfig.json file: 
// set strictNullChecks: true
let canBeNull: number | boolean = 12;


```


## How TS complile works
**On tsconfig.json**

- set "sourceMap": true
    will help us te debug the ts code on the browser.
    we the client side will also receive the ts files. and we can set breakpoint to the ts file. 

- set "noImplicityAny": true
    avoid using any as implicity type when init a varialbe

You can find a detailed documentation on the TypeScript Compiler Config File (tsconfig.json) here: http://www.typescriptlang.org/docs/handbook/tsconfig-json.html

Detailes on the Compiler Options can be found here: http://www.typescriptlang.org/docs/handbook/compiler-options.html


## TypeScript and ES6

TypeScirpt is not supporting all the ES6 function.

Features of es6 supported / unsupported: http://kangax.github.io/compat-table/es6/

```javascript

// Default Parameters
const fn = (start: number = 10, end: number = start + 5): void => {
    console.log(start, end);
}
fn(); // 10, 15;

// Rest
function makeArray (name: string, ...args: number[]) {
    return args; // args is an array which not include name.
}


```


## Class And Objects

```javascript

class Person {

    private name: string;
    private type: string;
    protected age: number = 100;

    // username here will be a public member of the class.
    constructor(name: string, public username: string) {
        this.name = name;
    }

    printAge() {
        console.log(this.age);
    }

    private setType(type: string) {
        this.type = type;
    }
}

// Inheritancre
class Wei extends Person {
    constructor(username: string) {
        super("Wei", username);
        this.age = 100;
        // this.type = 'type' // error, type is private in the parent class.
    }
}

// Getters & Setters
class Plant {
    private _species: string;

    set species(value: string) {
        this._species = value;
    }

    get species() {
        return _this._species;
    }
}

// Static Properties & Methods
class Helper {
    static PI: number = 3.14;
}

// Abstract Class: can not be instantiated. need to be inheretant before instantiated
abstratct class Project {
    projectName: string = "Default";

    abstract changeName(name: string): void;
}

class ITProject extends Project {
    changeName(name: string): void {
        this.projectName = name;
    }
}

// Private Constructors
class OnlyOne {
    private static instance: OnlyOne;

    private constructor(public name: string) {}

    static getInstance() {
        if(!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne("The Only One");
        }

        return OnlyOne.instance;
    }
}

let singleTon = OnlyOne.getInstance();



```










































