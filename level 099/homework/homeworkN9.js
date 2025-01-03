class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }

  static compareGrades(student1, student2) {
    if (student1.grade > student2.grade) {
      return `${student1.name} has a higher grade than ${student2.name}.`;
    } else if (student1.grade < student2.grade) {
      return `${student2.name} has a higher grade than ${student1.name}.`;
    } else {
      return `${student1.name} and ${student2.name} have the same grade.`;
    }
  }
}
