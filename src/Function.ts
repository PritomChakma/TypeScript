//  Function
//  Arrow Function , Normal Function

function addNormal(num1: number, num2: number) {
  return num1 + num2;
}

addNormal(2, 4);

const addArrow = (num1: number, num2: number) => num1 + num2;

// console.log(addArrow(2, 6));

// Object => function => Methods

const user = {
  name: "Pritom Chakma",
  age: 24,
  balance: 0,

  addBalance(value: number): number {
    return (this.balance += value);
  },
};

user.addBalance(500);
// console.log(user.balance);

const arr: number[] = [1, 2, 3, 4];

const Sqr = arr.map((e) => e * 2);
// console.log(Sqr);

const SqeArr = arr.map((e: number): number => e * e);

// console.log(SqeArr);
