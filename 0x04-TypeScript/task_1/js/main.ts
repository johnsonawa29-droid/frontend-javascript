// Define the Teacher interface
interface Teacher {
  readonly firstName: string;        // readonly → can only be set at initialization
  readonly lastName: string;         // readonly → can only be set at initialization
  fullTimeEmployee: boolean;         // must always be defined
  yearsOfExperience?: number;        // optional
  location: string;                  // must always be defined
  [key: string]: any;                // allows extra attributes like "contract"
}

// Example usage
const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false,
};

console.log(teacher3);
S