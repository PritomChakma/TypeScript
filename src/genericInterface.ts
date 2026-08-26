interface User {
  name: string;
  age: number;
}

function printData<T>(data: T): T {
  return data;
}

const result = printData<User>({
  name: "Pritom",
  age: 24,
});

console.log(result.name);