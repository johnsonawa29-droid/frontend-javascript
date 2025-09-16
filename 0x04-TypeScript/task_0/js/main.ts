interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const student1: Student = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 20,
  location: "Lagos",
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Smith",
  age: 22,
  location: "Abuja",
};

const studentsList: Student[] = [student1, student2]:

const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false,
};

console.log(teacher3);

interface Teacher {
  readonly firstName: string;   // only set during initialization
  readonly lastName: string;    // only set during initialization
  fullTimeEmployee: boolean;    // must always be defined
  yearsOfExperience?: number;   // optional
  location: string;             // must always be defined
  [key: string]: any;           // allow extra properties like contract
}

