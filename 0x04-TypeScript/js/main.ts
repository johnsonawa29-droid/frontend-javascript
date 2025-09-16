// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 22,
  location: "Lagos"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 24,
  location: "Abuja"
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Render a table using Vanilla JS
const table = document.createElement("table");
const tableHead = document.createElement("tr");

// Create table headers
const th1 = document.createElement("th");
th1.textContent = "First Name";
const th2 = document.createElement("th");
th2.textContent = "Location";
tableHead.appendChild(th1);
tableHead.appendChild(th2);

table.appendChild(tableHead);

// Loop through students and add rows
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  table.appendChild(row);
});

// Append the table to the body
document.body.appendChild(table);
