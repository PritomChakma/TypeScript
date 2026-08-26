const arrNumber = (value: number) => [value];
const arrString = (value: string) => [value];
const arrBoolean = (value: boolean) => [value];
const genericObj = (value: { id: string; name: string; age: string }) => {
  return [value];
};

const number = arrNumber(24);
const name = arrString("pritom");
const isMarried = arrBoolean(true);

// console.log(number, name, isMarried);

const createArrayWithGeneric = <T>(value: T) => [value];

const myName = createArrayWithGeneric("Pritom");

// tuple
const createArrayTuple = (params1: string, params2: number) => [
  params1,
  params2,
];

const genericTuple = <x, y>(params1: x, params2: y) => [params1, params2];

const user = genericTuple("pritom", 24);

const student =<T> (studentInfo: T) => {
  return {
    course: "Programming Hero",
    ...studentInfo,
  };
};


const student1 = {
  name : "Mr. Rahim",
  hasLeptop: true,
  isMarried: false
}

const student2 = {
  name : "Mr. Joshim",
  hasLeptop: false,
  ismarried: true,
  hasCard: true
}

const student1Infro = student(student1)
console.log(student1Infro);

const student2Infro = student(student2)
console.log(student2Infro);