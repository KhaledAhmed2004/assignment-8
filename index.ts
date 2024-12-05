// use this commend for see the results : npm run dev

// 1.Task: Array Filtering and Mapping
interface Person {
  name: string;
  age: number;
  gender: string;
}

// Function to filter out females and map remaining to names
function filterAndMapNames(people: Person[]): string[] {
  return people
    .filter((person) => person.gender !== "female") // Filter out females
    .map((person) => person.name); // Map to names of remaining people
}

// Example usage
const peopleArray: Person[] = [
  { name: "Alice", age: 30, gender: "female" },
  { name: "Bob", age: 25, gender: "male" },
  { name: "Charlie", age: 35, gender: "male" },
  { name: "Diana", age: 28, gender: "female" },
];

const result = filterAndMapNames(peopleArray);
console.log("1st result: ", result);

// 6.Task: Array Reduction
function sumOfEvenNumbers(numbers: number[]): number {
  return numbers.reduce((sum, current) => {
    // Check if the current number is even
    if (current % 2 === 0) {
      return sum + current; // Add even numbers to the sum
    }
    return sum; // Skip odd numbers
  }, 0); // Initial sum is 0
}

// Example usage
const nums = [1, 2, 3, 4, 5, 6];
console.log("2nd result: ", sumOfEvenNumbers(nums));

// 7.Task: Leap Year Checker

function isLeapYear(year: number): boolean {
  if (year % 400 === 0) {
    return true; // Divisible by 400
  } else if (year % 100 === 0) {
    return false; // Divisible by 100 but not 400
  } else if (year % 4 === 0) {
    return true; // Divisible by 4 but not 100
  } else {
    return false; // Not divisible by 4
  }
}

// Example usage
const year = 2024;
console.log("3rd result: ", `${year} is a leap year: ${isLeapYear(year)}`);

// 9.Task: Find Maximum Value:

function findMaxValue(numbers: number[]): number | undefined {
  if (numbers.length === 0) {
    return undefined; // Handle edge case: empty array
  }

  let max = numbers[0]; // Start with the first element
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i]; // Update max if current element is greater
    }
  }
  return max;
}

// Example usage
const values = [10, 25, 8, 99, 47];
console.log("4th result: ", findMaxValue(values));

//10.Task: Advanced Sorting
type Student = {
  name: string;
  grades: number[];
};

const students: Student[] = [
  { name: "Bob", grades: [75, 80, 70] },
  { name: "Alice", grades: [80, 92, 78] },
  { name: "John", grades: [90, 85, 88] },
];

const calculateAverage = (grades: number[]): number => {
  const sum = grades.reduce((acc, grade) => acc + grade, 0);
  return sum / grades.length;
};

const sortStudentsByAverageGrade = (students: Student[]): Student[] => {
  return students.sort((a, b) => {
    const avgA = calculateAverage(a.grades);
    const avgB = calculateAverage(b.grades);
    return avgB - avgA; // for descending order
  });
};

const sortedStudents = sortStudentsByAverageGrade(students);
console.log("5th result: ", sortedStudents);
