/*
 * Bug Fixing WOOP WOOP
 * 
 * Your goal in this file is to get rid of all the nasty red lines so that the
 * file compiles and runs properly! This will get you warmed up and familiar with TS quirks
 * before getting into some coding from scratch in part 2
 */


const arr: Array<string> = [33, 120, 111, 98, 100, 110, 97, 83, 32, 111, 116, 32, 101, 109, 111, 99, 108, 101, 87];
arr = arr.reverse();
const arrStr: string = String.fromCharCode(...arr);

const foo = (bar: number): void => {
  console.log(bar);
  return true;
}

foo(arrStr);

type Student = {
  name: string;
  year: "first" | "second" | "third" | "fourth" | "fifth";
  id?: string;
}

type Address = {
  streetNumber: number;
  street: string;
  city: string;
  state: string;
}

function doxx(s: Student, addy?: Address) {
  console.log(`${s.name} is a ${s.year} at Northeastern and has student ID ${s.id}.`);
  console.log(`They live at ${addy.streetNumber} ${addy.street} in ${addy.city}, ${addy.state}.`);
}

const you: Student = {

}

doxx(you);
