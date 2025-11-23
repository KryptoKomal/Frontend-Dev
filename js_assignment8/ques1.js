
class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        const total = this.marks.reduce((sum, val) => sum + val, 0);
        return total / this.marks.length;
    }

  
    getGrade() {
        const avg = this.calculateAverage();

        if (avg >= 90) return "A";
        if (avg >= 75) return "B";
        if (avg >= 50) return "C";
        return "F";
    }

    printResult() {
        console.log(`Student: ${this.name}`);
        console.log(`Marks: ${this.marks}`);
        console.log(`Average: ${this.calculateAverage()}`);
        console.log(`Grade: ${this.getGrade()}`);
        console.log("---------------------------");
    }
}


const student1 = new Student("Komal", [95, 88, 92, 96]);
const student2 = new Student("Rohan", [70, 75, 72, 68]);
const student3 = new Student("Anita", [45, 50, 48, 52]);

student1.printResult();
student2.printResult();
student3.printResult();
