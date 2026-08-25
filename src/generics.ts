// dynamically generalize

type GenericArray<value> = Array<value>;

const friends: string[] = ["raju", "karim", "Rahim", "Noyon"];
// different way Generic
const moreFriedns: Array<string> = ["Purbasha", "Joba", "Pramati"];

const numbers: number[] = [1, 2, 3, 4, 5];
// different way Generic
const newNumbers: Array<number> = [6, 7, 8, 9, 10];

const isAdmin: boolean[] = [true, false, true, false];
// different way Generic
const isEligible: Array<boolean> = [false, true, false, true];

const generic: GenericArray<string> = ["Pritom", "Chakma"];

type GenericCordinate<X, Y, Z> = [X, Y, Z];

const cordinate1: GenericCordinate<number, number, number> = [4, 6, 8];
const cordinate2: [string, string, string] = ["4", "6", "8"];
const cordinate3: GenericCordinate<boolean, boolean, boolean> = [
  true,
  false,
  true,
];

const user: GenericArray<{ name: string; age: number }> = [
  {
    name: "Pritom Chakma",
    age: 24,
  },
  {
    name: "Pramati Chakma",
    age: 23,
  },
  {
    name: "joba Tanchangya",
    age: 24,
  },
];
