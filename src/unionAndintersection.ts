//  Union and Intersection

type DashboardRole = "admin" | "user";

const dashboard = (role: DashboardRole) => {
  if (role === "admin") {
    return "Admin Dashboard";
  } else if (role === "user") {
    return "User Dashboard";
  } else {
    return "Guest Dashboard";
  }
};

console.log(dashboard("user"));

type Person = {
  name: string;
};

type Employee = {
  employeeId: number;
};

type Stuff = Person & Employee;

const companyStuff: Stuff = {
  name: "Pritom Chakma",
  employeeId: 3242,
};

console.log(companyStuff);