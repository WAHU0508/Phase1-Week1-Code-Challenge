function gradeAssignment(marks) {
    if (typeof marks === 'number') {
        if (marks > 79 && marks <=100) {
            return 'A';
        }
        else if (marks >= 60 && marks <= 79) {
            return 'B';
        }
        else if (marks >= 50 && marks <= 59) {
            return 'C';
        }
        else if (marks >= 40 && marks <= 49) {
            return 'D';
        }
        else if (marks < 40 && marks >= 0) {
            return 'E';
        }
        else {
            return 'INPUT NOT BETWEEN 0 TO 100!!!'
        }
    }
    else {
        return 'INVALID INPUT!!!'
    }
}
// console.log(gradeAssignment(82));
// console.log(gradeAssignment(57));
// console.log(gradeAssignment(42));
// console.log(gradeAssignment(38));
// console.log(gradeAssignment('100'));
// console.log(gradeAssignment(101));
// console.log(gradeAssignment(true));
