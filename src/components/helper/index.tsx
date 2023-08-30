import { createYield } from "typescript";

interface Person{
  name:string,
  age :number ,
  gender?:string|number|undefined 
}

let aPerson:Person = {
    name:'Bov',
    age:34,
    gender:'Male'

}

console.log(aPerson.gender)


//typescript support option attribur by ?
interface Book {
    title: string;
    author: string;
    year?: number;
    };
 const validBook: Book = {
    title: "typescript learning",
    author: "uncle bob"
    };


const invalidBook: Book = {
    title: 'Invalid Book',
    author: 'Unknown',
    meta: 'Some additional information',
    };
//Interfaces can have readonly properties
//that cannot be modified after initialization.

interface Point {
    readonly x: number;
    readonly y: number;
    };
 
const point: Point = {
x: 5,
y: 10,
};
point.x
//point.x = 8;
 // Error: Cannot assign to 'x' because it is a
// read-only property.

//interface defined the shape of the function

interface MathOpre{
    (x:number,y:number):number
}

const add:MathOpre =(x,y)=> x+y
const sub:MathOpre =(x,y)=> x-y
const div:MathOpre =(x,y)=>{
    return y !== 0 ? x/y :0 }

    // interface inheriting part interface like OOP

    interface Shape {
        color: string;
        };
    interface Square extends Shape {
        sideLength: number;
        };
    interface Circle extends Shape {
            sideLength: number;
            };
    const aSquare: Square = {
        color: 'red',
        sideLength: 5,
        };
   interface Circle extends Shape  {
        radius:number,
        diaMater?:number
            };
    const acircle ={
        radious:4,
        diameter:2,
        color:'green'
    }     