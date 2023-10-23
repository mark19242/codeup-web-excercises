// // Function to find the largest number in an array
// // const findLargestNumber = (arr) => {
//     // validate and return early
//     // start a variable "largest" at 0
//     // loop through arr and replace "largest" if value is greater
//     // return largest
// };
//
// (() => {
//     // Sample array of numbers
//
//     // Call the function and display the result
//
//
// })();

//
// const numbers = [42, 17, 8, 94, 23, 61, 12, 51, 6];
//
// const largestNumber = () => {
//     if (numbers.length === 0) {
//         return undefined;
//     }
//
//     let largest = numbers[0];
//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i] > largest) {
//             largest = numbers[i];
//         }
//     }
//
//     return largest;
// };
//
// console.log(largestNumber());
//
// ///////////////////////////////////////////////////////////////////
// // Function to calculate the average grade of the students
// const calculateAverageGrade = (studentList) => {
//     let classAverage;
//
//
//
//     return classAverage;
// };
//
// // Function to find the student with the highest grade
// const findTopStudent = (studentList) => {
//     let topStudent;
//
//     // Your code here
//
//     return topStudent;
// };
//
// //IIFE / Main
// (() => {
//     // Array of student objects
//     const students = [
//         { id: 1, name: "Alice", grade: 90 },
//         { id: 2, name: "Bob", grade: 85 },
//         { id: 3, name: "Charlie", grade: 78 },
//         { id: 4, name: "David", grade: 92 },
//         { id: 5, name: "Eva", grade: 88 },
//     ];
//     // Display the average grade and the top student
//     const averageGrade = calculateAverageGrade(students);
//     const topStudent = findTopStudent(students);
//
//     console.log(`Average Grade: ${averageGrade}`);
//     console.log(`Top Student: ${topStudent.name} (Grade: ${topStudent.grade})`);
// })();






// Instructions:
// 1. Write the FizzBuzz logic within the fizzBuzz function.
// 2. Use conditional statements and loops to determine if a number is divisible by 3, 5, or both.

// Function to implement FizzBuzz for a given range



const fizzBuzz = (start,end) => {
    start = parseFloat(start);
    end = parseFloat(end);
    if (isNaN(start) || isNaN(end)) {
        return false;
    }
    for (let i = 1; i <= 100 ; i++) {
        if (i % 3 === 0 && i % 5===0) {
            console.log("FizzBuzz")
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else if (i % 3=== 0) {
            console.log("Fizz")
        }
    }


};

// Call the function to perform FizzBuzz for a specific range
fizzBuzz(1, 100);


// Write your FizzBuzz logic here
// Loop through numbers from start to end
// Check if the current number is divisible by 3
// console.log "Fizz" if it is divisible by 3
// Check if the current number is divisible by 5
// console.log "Buzz" if it is divisible by 5
// If the number is not divisible by 3 or 5, console.log the number itself