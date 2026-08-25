type User = {
  name: string;
  age: number;
};

const data: unknown = {
  name: "Pritom",
  age: 24,
};

const user = data as User;

console.log(user.name);