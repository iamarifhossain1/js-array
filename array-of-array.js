const numbers = [12, 35, 75, 15, 87, 53];
const tournamentPlayer = [[], [], []];
const examMakrs = [
    [45, 68, 28, 35, 60],
    [58, 28, 78, 45, 72],
    [97, 50, 12, 25, 65],
    [87, 26, 41, 55, 15]
]

examMakrs[0][1] = 78;

console.log(examMakrs[0][0]);
console.log(examMakrs[1].pop());
console.log(examMakrs[1].push(44));
console.log(examMakrs);

for (const marks of examMakrs) {
    console.log(marks);
    
}

