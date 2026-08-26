type MustHave = {name:string, id:number}

const students =<T extends MustHave> (studentInfo: T) => {
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

const student3 ={
    id: 1,
    name: "Bokkor Ali",
    hasWatch : true
}

const student3Info = students(student3)
console.log(student3Info);