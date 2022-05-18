function gradeCalculation(marks) {
  if (marks > 100 || isNaN) {
    console.log("invalid marks");
  } else {
    if (marks >= 80) {
      console.log(marks, "grade is A+");
    } else if (marks >= 70) {
      console.log(marks, "grade is A");
    } else if (marks >= 60) {
      console.log(marks, "grade is A-");
    } else if (marks >= 50) {
      console.log(marks, "grade is B+");
    } else if (marks >= 40) {
      console.log(marks, "grade is B");
    } else if (marks >= 33) {
      console.log(marks, "grade is B-");
    } else {
      console.log(marks, "fail");
    }
  }
}

gradeCalculation("fafaf");
