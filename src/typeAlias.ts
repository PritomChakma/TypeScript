// typeAlias

type User = {
  name: String;
  Age: number;
  gender: "male" | "female";
  conactNo: string;
  address: string;
};

const user1: User = {
  name: "Pritom Chakma",
  Age: 24,
  gender: "male",
  conactNo: "0161377",
  address: "Rangamati",
};

// console.log(user1);

// function type Alias

type addFunftion = (a: number, b: number) => number;

const num: addFunftion = (a, b) => a + b;

console.log(num(3, 5));
