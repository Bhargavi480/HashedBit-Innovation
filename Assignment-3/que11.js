const students = [
    { name: "student1", scores: [44, 56, 87, 97, 37] },
    { name: "student2", scores: [44, 56, 87, 97, 37] },
    { name: "student3", scores: [44, 56, 87, 97, 37] }
];

const output = students.map(student => {
    let average = student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length;
    return { name: student.name, average: Math.floor(average) };
});

console.log(output);
