/**
 * More Typescript Fun
 * 
 * Your goal in this file is to address all of the TODO items!
 * This section is a little more open ended, so feel free to make 
 * ~design decisions~ and ask for input. We will provide sample solutions,
 * but remember that our sample solutions are not necessarily "correct"!
 */

import { Student, you } from './0';

// TODO: Create a type or interface to describe a class at Northeastern
// Classes should have a department, course number, professor, students, and capacity
// Some classes do not have professors assigned yet.
type Course = {
  department: string;
  courseNum: number;
  professorName?: string;
  students: Array<Student>;
  capacity: number;
}

// TODO: Create variables for your 2 favorite classes at Northeastern
const ood: Course = {
  department: "CS",
  courseNum: 3500,
  professorName: "Vido",
  students: [],
  capacity: 5000
}

const orgo: Course = {
  department: "CHEM",
  courseNum: 2311,
  students: [],
  capacity: 200
}

// TODO: Design a function to enroll a student in a class
// Students should only be enrolled if the class is not at capacity
// The function should return the updated number of students in the class
// Make sure you document it!
/**
 * Enrolls the given student in the given course if the course is not at capacity,
 * and returns the updated number of students in the course.
 * 
 * @param {Student} student the student to enroll
 * @param {Course} course the course to enroll the student in
 * @return {number} the number of students enrolled in the course
 */
const enroll = (student: Student, course: Course): number => {
  if (course.students.length === course.capacity) {
    return course.capacity
  }
  course.students.push(student);
  return course.students.length;
}

// TODO: enroll yourself
enroll(you, ood);
enroll(you, orgo);

// TODO: Create a function that outputs details about a Student or Course
// Output for students should simply be their name
// Output for courses should contain the department, course number, number of students enrolled
// student capacity, and list of student names enrolled.
/**
 * Detail the given student or course.
 * 
 * @param {Student | Course} item a student or course to log details about
 * @returns {string} a string containing details of the input
 */
const detail = (item: Student | Course): string => {
  if ("department" in item) {
    return `${item.department}${item.courseNum} ${item.students.length} / ${item.capacity} enrolled
    Students: ${item.students.map(detail).join(", ")}`
  } else {
    return item.name
  }
}

// TODO: run your function on one of your courses and print the results!
console.log(detail(ood));
